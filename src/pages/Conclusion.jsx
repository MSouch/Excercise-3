import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import Layout from '../components/common/Layout.jsx'
import {useProgress} from '../hooks/useProgress.jsx'
import {useAuth} from '../hooks/useAuth.jsx'
import SafeIcon from '../common/SafeIcon.jsx'
import * as FiIcons from 'react-icons/fi'
import { FaLinkedin, FaFacebook, FaXTwitter, FaArrowDown, FaArrowUp } from 'react-icons/fa6'
import {jsPDF} from 'jspdf'
import logoImg from '../assets/AP-Networks-LearningSytems-Full-DivOf (6).png'

const {FiAward,FiDownload,FiHome,FiTarget}=FiIcons

const Conclusion=()=> {
  const {user}=useAuth()
  const {progress}=useProgress()
  const [certificateUrl,setCertificateUrl]=useState(null)
  const [generating,setGenerating]=useState(false)
  const [certificateGenerated,setCertificateGenerated]=useState(false)

  const calculateScoreLevel=()=> {
    const {completedChallenges,totalChallenges}=progress
    if (completedChallenges===totalChallenges) return 'Expert'
    if (completedChallenges >=3) return 'Proficient'
    if (completedChallenges >=2) return 'Developing'
    return 'Needs Training'
  }

  const generateCertificate=async ()=> {
    console.log('Starting certificate generation...')
    setGenerating(true)

    try {
      console.log('Creating jsPDF instance...')
      const pdf=new jsPDF('landscape')
      const pageWidth=pdf.internal.pageSize.width
      const pageHeight=pdf.internal.pageSize.height
      console.log('PDF dimensions:',{pageWidth,pageHeight})

      // Background
      pdf.setFillColor(248,250,252)
      pdf.rect(0,0,pageWidth,pageHeight,'F')

      // Border
      pdf.setDrawColor(59,130,246)
      pdf.setLineWidth(3)
      pdf.rect(10,10,pageWidth - 20,pageHeight - 20)

      // APLS Logo (upper left corner)
      const loadImageAsDataURL = async (url) => {
        const res = await fetch(url)
        const blob = await res.blob()
        return await new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(blob)
        })
      }
      try {
        const logoData = await loadImageAsDataURL(logoImg)
        pdf.addImage(logoData, 'PNG', 20, 18, 60, 22)
      } catch (e) {
        // Fallback border if image fails
        pdf.setDrawColor(200,200,200)
        pdf.setLineWidth(1)
        pdf.rect(20,20,60,22)
      }

      // Header
      pdf.setFontSize(24)
      pdf.setTextColor(59,130,246)
      pdf.text('CERTIFICATE OF COMPLETION',pageWidth / 2,40,{align: 'center'})

      // Subtitle
      pdf.setFontSize(16)
      pdf.setTextColor(75,85,99)
      pdf.text('Communication Navigator Training Simulation',pageWidth / 2,55,{align: 'center'})

      // User name
      pdf.setFontSize(20)
      pdf.setTextColor(17,24,39)
      const userName=user?.full_name || user?.user_metadata?.full_name || 'Participant'
      pdf.text(`This certifies that ${userName}`,pageWidth / 2,80,{align: 'center'})

      // Achievement (moved up to replace where email was)
      pdf.setFontSize(16)
      pdf.setTextColor(75,85,99)
      pdf.text('has successfully completed the Communication Navigator training simulation',pageWidth / 2,100,{align: 'center'})
      pdf.text('and demonstrated mastery of cross-functional communication principles',pageWidth / 2,115,{align: 'center'})

      // Score level
      pdf.setFontSize(18)
      pdf.setTextColor(34,197,94)
      pdf.text(`Achievement Level: ${calculateScoreLevel()}`,pageWidth / 2,135,{align: 'center'})

      // Date
      pdf.setFontSize(12)
      pdf.setTextColor(107,114,128)
      const date=new Date().toLocaleDateString('en-US',{year: 'numeric',month: 'long',day: 'numeric'})
      pdf.text(`Completed on ${date}`,pageWidth / 2,155,{align: 'center'})

      // Company info
      pdf.setFontSize(14)
      pdf.setTextColor(59,130,246)
      pdf.text('AP-Learning Systems',pageWidth / 2,175,{align: 'center'})

      // Division text
      pdf.setFontSize(10)
      pdf.setTextColor(107,114,128)
      pdf.text('A Division of AP-Networks LLC',pageWidth / 2,185,{align: 'center'})

      // Completion Code (lower left corner)
      pdf.setFontSize(10)
      pdf.setTextColor(107,114,128)
      pdf.text('Completion Code: CN0300',20,pageHeight - 30,{align: 'left'})

      // Certificate verification info (lower right corner) - keep email here for verification
      const userEmail=user?.email || user?.user_metadata?.email || ''
      if (userEmail) {
        pdf.setFontSize(8)
        pdf.setTextColor(107,114,128)
        pdf.text(`Issued to: ${userEmail}`,pageWidth - 20,pageHeight - 40,{align: 'right'})
      }

      // Copyright (bottom center)
      pdf.setFontSize(8)
      pdf.setTextColor(107,114,128)
      pdf.text('© 2025 AP-Learning Systems,a Division of AP-Networks LLC - ALL RIGHTS RESERVED',pageWidth / 2,pageHeight - 15,{align: 'center'})

      console.log('PDF content generated successfully')

      // Save certificate
      const pdfBlob=pdf.output('blob')
      const url=URL.createObjectURL(pdfBlob)
      console.log('Certificate blob created:',{size: pdfBlob.size,type: pdfBlob.type})

      setCertificateUrl(url)
      setCertificateGenerated(true)

      // Save certificate info to localStorage
      const certificateData={
        user_id: user.id,
        user_email: user.email || user.user_metadata?.email,
        user_name: userName,
        certificate_code: 'CN0300',
        score_level: calculateScoreLevel(),
        total_score: progress.overallScore,
        issued_at: new Date().toISOString(),
        url: url
      }
      localStorage.setItem('communicationCertificate',JSON.stringify(certificateData))
      console.log('Certificate data saved to localStorage')
    } catch (error) {
      console.error('Error generating certificate:',error)
      // Show user-friendly error message
      alert('There was an error generating your certificate. Please try refreshing the page and trying again.')
    } finally {
      setGenerating(false)
    }
  }

  const downloadCertificate=()=> {
    console.log('Download certificate clicked,URL:',certificateUrl)
    if (certificateUrl) {
      try {
        const userName=user?.full_name || user?.user_metadata?.full_name || 'Participant'
        const fileName=`Communication-Navigator-Certificate-${userName.replace(/\s+/g,'-')}.pdf`

        // Create download link
        const link=document.createElement('a')
        link.href=certificateUrl
        link.download=fileName
        link.style.display='none'

        // Append to body,click,and remove
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        console.log('Certificate download initiated:',fileName)
      } catch (error) {
        console.error('Error downloading certificate:',error)
        alert('There was an error downloading your certificate. Please try again.')
      }
    } else {
      console.error('No certificate URL available for download')
      alert('Certificate not ready. Please wait for generation to complete.')
    }
  }

  // Generate certificate when component mounts if all challenges are complete
  useEffect(()=> {
    console.log('Conclusion useEffect triggered')
    console.log('Progress:',progress)
    console.log('Completed challenges:',progress.completedChallenges)
    console.log('Total challenges:',progress.totalChallenges)

    if (progress.completedChallenges===progress.totalChallenges && !certificateGenerated && !generating) {
      console.log('All challenges complete,generating certificate...')
      generateCertificate()
    }
  },[progress,certificateGenerated,generating])

  const performanceImpacts=[
    {challenge: 'Challenge 1',impact: 'Prevented communication chaos during emergency shutdown through department-specific messaging'},
    {challenge: 'Challenge 2',impact: 'Resolved resource conflicts through stakeholder analysis and integrated solution development'},
    {challenge: 'Challenge 3',impact: 'Successfully translated technical information across multiple stakeholder groups'},
    {challenge: 'Challenge 4',impact: 'Designed comprehensive communication strategy for large-scale organizational change'}
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-success-50 to-primary-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{opacity: 0,y: 30}}
            animate={{opacity: 1,y: 0}}
            transition={{duration: 0.6}}
          >
            <div className="w-20 h-20 bg-success-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiAward} className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Congratulations, Communication Navigator!
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You've successfully navigated four complex cross-functional communication scenarios using professional best practices. Your systematic approach demonstrates mastery of communication bridge-building fundamentals.
            </p>
          </motion.div>

          {/* Performance Impact */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
            initial={{opacity: 0,y: 20}}
            animate={{opacity: 1,y: 0}}
            transition={{delay: 0.2,duration: 0.6}}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Your Communication Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {performanceImpacts.map((item,index)=> (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{opacity: 0,x: -20}}
                  animate={{opacity: 1,x: 0}}
                  transition={{delay: 0.4 + index * 0.1,duration: 0.6}}
                >
                  <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <SafeIcon icon={FiTarget} className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.challenge}</h3>
                    <p className="text-gray-600 text-sm">{item.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Statistics */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
            initial={{opacity: 0,y: 20}}
            animate={{opacity: 1,y: 0}}
            transition={{delay: 0.6,duration: 0.6}}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Real-World Success Statistics
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Industrial facilities using integrated communication approaches like yours report:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {metric: '23%',label: 'Decrease in schedule delays',direction: 'down'},
                {metric: '31%',label: 'Decrease in stakeholder escalations',direction: 'down'},
                {metric: '27%',label: 'Decrease in communication rework',direction: 'down'},
                {metric: '+18%',label: 'Increase in cross-team satisfaction',direction: 'up'}
              ].map((stat,index)=> {
                const IconComp = stat.direction==='down' ? FaArrowDown : FaArrowUp
                const color = stat.direction==='down' ? 'text-success-600' : 'text-primary-600'
                const bg = stat.direction==='down' ? 'bg-success-100' : 'bg-primary-100'
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{opacity: 0,scale: 0.8}}
                    animate={{opacity: 1,scale: 1}}
                    transition={{delay: 0.8 + index * 0.1,duration: 0.6}}
                  >
                    <div className={`w-12 h-12 ${bg} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <IconComp className={`w-6 h-6 ${color}`} />
                    </div>
                    <p className={`text-2xl font-bold ${color} mb-1`}>{stat.metric}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">Overall Event Success</p>
              <div className="mt-2 inline-flex items-center space-x-2">
                <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                  <FaArrowUp className="w-5 h-5 text-success-600" />
                </div>
                <span className="text-xl font-semibold text-success-700">Upward trend in outcomes</span>
              </div>
            </div>
          </motion.div>

          {/* Certificate Section */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
            initial={{opacity: 0,y: 20}}
            animate={{opacity: 1,y: 0}}
            transition={{delay: 1.0,duration: 0.6}}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Certificate of Completion
            </h2>
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary-500 to-success-500 rounded-lg p-6 text-white mb-6">
                <SafeIcon icon={FiAward} className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Certified Communication Navigator</h3>
                <p className="text-primary-100">
                  Achievement Level: {calculateScoreLevel()}
                </p>
                <p className="text-primary-100 text-sm">
                  Overall Score: {progress.overallScore}%
                </p>
                <p className="text-primary-100 text-sm mt-2">
                  Completion Code: CN0300
                </p>
                {user?.email && (
                  <p className="text-primary-100 text-xs mt-2">
                    Issued to: {user.email}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                {generating ? (
                  <div className="flex items-center justify-center space-x-2 py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-500"></div>
                    <span className="text-gray-600">Generating your certificate...</span>
                  </div>
                ) : certificateGenerated && certificateUrl ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-success-600 mb-4">
                      <SafeIcon icon={FiAward} className="w-5 h-5" />
                      <span className="font-medium">Certificate Ready!</span>
                    </div>
                    <div className="space-x-4">
                      <button
                        onClick={downloadCertificate}
                        className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg"
                      >
                        <SafeIcon icon={FiDownload} className="w-4 h-4" />
                        <span>Download Certificate</span>
                      </button>
                      {/* Social Share Section */}
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-sm font-medium text-gray-700 mb-3">Share your achievement:</p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                          {(() => {
                            const placeholderUrl='[Insert Certificate Download]'
                            const shareUrl=encodeURIComponent(placeholderUrl)
                            const baseText='I just completed the Communication Navigator training simulation!'
                            const hashTags='#Communication #Leadership #ProfessionalDevelopment'
                            const fullText=`${baseText} ${hashTags}`
                            const shareText=encodeURIComponent(fullText)
                            const platforms=[
                              {name: 'LinkedIn',href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,bg: 'bg-[#0A66C2] hover:bg-[#084f94]',icon: FaLinkedin},
                              {name: 'Facebook',href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`,bg: 'bg-[#1877F2] hover:bg-[#125ec0]',icon: FaFacebook},
                              {name: 'X',href: `https://twitter.com/intent/tweet?text=${shareText}`,bg: 'bg-black hover:bg-neutral-800',icon: FaXTwitter}
                            ]
                            return (
                              <>
                                {platforms.map(p=> (
                                  <a
                                    key={p.name}
                                    href={p.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center space-x-2 ${p.bg} text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow`}
                                  >
                                    <p.icon className="w-4 h-4" />
                                    <span>{p.name}</span>
                                  </a>
                                ))}
                                <button
                                  type="button"
                                  onClick={()=> {
                                    navigator.clipboard.writeText(fullText)
                                    alert('Share text copied to clipboard')
                                  }}
                                  className="inline-flex items-center space-x-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors shadow"
                                >
                                  <span>Copy Share Text</span>
                                </button>
                              </>
                            )
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="py-4">
                    <button
                      onClick={generateCertificate}
                      disabled={progress.completedChallenges < progress.totalChallenges}
                      className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <SafeIcon icon={FiAward} className="w-4 h-4" />
                      <span>Generate Certificate</span>
                    </button>
                    {progress.completedChallenges < progress.totalChallenges && (
                      <p className="text-sm text-gray-500 mt-2">
                        Complete all challenges to generate your certificate
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
            initial={{opacity: 0,y: 20}}
            animate={{opacity: 1,y: 0}}
            transition={{delay: 1.2,duration: 0.6}}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Next Steps for Continued Excellence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Immediate Actions:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Apply message construction principles to your current communications</li>
                  <li>• Conduct stakeholder analysis for ongoing project challenges</li>
                  <li>• Use conflict resolution frameworks for resource allocation decisions</li>
                  <li>• Build proactive communication bridges with key stakeholders</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Continue Learning:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <a className="text-primary-600 hover:underline" href="#" target="_blank" rel="noreferrer">Advanced Stakeholder Management Workshop</a></li>
                  <li>• <a className="text-primary-600 hover:underline" href="#" target="_blank" rel="noreferrer">Cross-Functional Leadership Excellence Course</a></li>
                  <li>• <a className="text-primary-600 hover:underline" href="#" target="_blank" rel="noreferrer">Strategic Communication Planning Program</a></li>
                  <li>• <a className="text-primary-600 hover:underline" href="#" target="_blank" rel="noreferrer">Other Navigator Series training modules</a></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="text-center"
            initial={{opacity: 0,y: 20}}
            animate={{opacity: 1,y: 0}}
            transition={{delay: 1.4,duration: 0.6}}
          >
            <Link
              to="/dashboard"
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              <SafeIcon icon={FiHome} className="w-4 h-4" />
              <span>Return to Dashboard</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default Conclusion