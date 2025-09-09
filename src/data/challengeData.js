export const challengeContent = {
  1: {
    id: 1,
    title: "The Emergency Shutdown Communication Crisis",
    scenario: {
      time: "Day 1, 6:45 AM - Unit 3 Control Room",
      description: "A critical safety sensor in Unit 3 has triggered an automatic shutdown. Six departments need immediate, coordinated response:\n\n• Engineering: Requires diagnostic data and technical analysis\n• Operations: Needs restart procedures and safety clearances\n• Maintenance: Must coordinate equipment access and repairs\n• HSE: Demands incident investigation and compliance documentation\n• Supply Chain: May need emergency parts with 4-hour delivery\n• Management: Requires status updates every 30 minutes\n\nThe Problem: Your initial communication attempt created chaos. Engineering complained about 'useless operational jargon,' Operations can't understand the technical specifications, and HSE is demanding information you haven't provided. Production losses are mounting at $15,000 per hour."
    },
    question: "What is your immediate communication response?",
    options: {
      A: "Send the same detailed technical report to all departments simultaneously",
      B: "Call an immediate meeting with all department heads to discuss the situation",
      C: "Create department-specific messages addressing each team's immediate needs",
      D: "Wait for more information before communicating to avoid confusion"
    },
    correctAnswer: "C",
    feedback: {
      A: {
        correct: false,
        message: "Sending identical technical reports to all departments violates the fundamental principle of audience analysis. Research shows that 73% of communication failures in industrial settings result from mismatched technical complexity. Engineering needs detailed diagnostics, but Operations needs actionable steps, and Management needs impact summaries.",
        guidingQuestion: "How might different departments process and use the same technical information differently?"
      },
      B: {
        correct: false,
        message: "While meetings have value, emergency situations require immediate action from multiple departments working in parallel. Studies indicate that emergency response meetings delay critical actions by an average of 23 minutes. During Unit 3's downtime, this delay costs $5,750 in lost production.",
        guidingQuestion: "What information does each department need to begin their response immediately?"
      },
      C: {
        correct: true,
        message: "Creating department-specific messages demonstrates mastery of communication fundamentals by applying audience analysis and sender responsibility principles. This enables parallel response, reduces cognitive overload, and maintains sender accountability.",
        explanation: "Emergency communications require department-specific information tailored to each team's immediate action needs. Engineering gets technical data, Operations gets procedural steps, all while maintaining overall coordination. This approach respects departmental needs while enabling immediate parallel response."
      },
      D: {
        correct: false,
        message: "Waiting for complete information violates sender responsibility principles. Industrial communication research shows that 89% of emergency response delays result from information hoarding rather than actual data unavailability. Each minute of silence increases stakeholder anxiety and reduces response effectiveness.",
        guidingQuestion: "What minimum information does each department need to start their response safely?"
      }
    }
  },
  2: {
    id: 2,
    title: "The Resource Conflict Navigation",
    scenario: {
      time: "Day 3, 10:15 AM - Planning Office",
      description: "Three critical projects are competing for the same specialized maintenance crew during the next two weeks:\n\n• Project Alpha (Operations Priority): Emergency pump repair affecting production capacity\n  - Impact: $25,000/day production loss if delayed\n  - Duration: 3 days\n  - Risk: Medium technical complexity\n\n• Project Beta (Engineering Priority): Critical safety system upgrade with regulatory deadline\n  - Impact: $500,000 fine if deadline missed\n  - Duration: 5 days\n  - Risk: High technical complexity, regulatory visibility\n\n• Project Gamma (Environmental Priority): Waste treatment modification for compliance\n  - Impact: Potential facility shutdown if not completed\n  - Duration: 4 days\n  - Risk: Environmental regulatory scrutiny\n\nThe Conflict: Each department head is demanding their project takes priority. Operations claims immediate production impact, Engineering cites regulatory deadlines, and Environmental warns of shutdown risk. The maintenance crew can only handle one project at a time."
    },
    question: "How do you resolve this resource allocation conflict?",
    options: {
      A: "Allocate resources based on financial impact calculations only",
      B: "Conduct stakeholder analysis to understand underlying needs and develop integrated solutions",
      C: "Let the departments negotiate directly without planner involvement",
      D: "Escalate immediately to senior management for decision"
    },
    correctAnswer: "B",
    feedback: {
      A: {
        correct: false,
        message: "Financial impact alone ignores critical factors like regulatory compliance, safety implications, and long-term relationship impacts. Studies show that purely financial resource allocation creates 67% more cross-functional conflicts within 90 days, as teams feel their non-financial priorities are undervalued.",
        guidingQuestion: "What other factors besides immediate financial impact should influence resource allocation decisions?"
      },
      B: {
        correct: true,
        message: "Conducting stakeholder analysis demonstrates integration of ecosystem understanding with conflict resolution principles, leading to sustainable solutions. This reveals underlying needs, builds stakeholder buy-in, and identifies integration opportunities.",
        explanation: "Stakeholder analysis reveals creative integration opportunities that address multiple needs while maintaining productive relationships. Look beyond surface positions to understand true requirements, which often identifies solutions like phased implementation or shared resources."
      },
      C: {
        correct: false,
        message: "Avoiding planner involvement in resource conflicts violates integration responsibilities and often leads to win-lose outcomes that damage relationships. Research indicates that unmediated departmental negotiations result in 43% lower satisfaction rates and 28% higher conflict recurrence.",
        guidingQuestion: "How might your role as a planner help develop solutions that address multiple departmental needs?"
      },
      D: {
        correct: false,
        message: "Immediate escalation without analysis demonstrates poor conflict resolution skills and burdens senior management with operational decisions. Data shows that 82% of resource conflicts can be resolved at the planning level when proper stakeholder analysis is conducted.",
        guidingQuestion: "What information and analysis should you provide before escalating resource allocation decisions?"
      }
    }
  },
  3: {
    id: 3,
    title: "The Technical Translation Crisis",
    scenario: {
      time: "Day 5, 2:30 PM - Conference Room B",
      description: "Engineering has completed a critical technical assessment for a new process control system. The recommendation requires immediate cross-functional understanding and approval:\n\nEngineering's Technical Summary: 'The distributed control system requires implementation of advanced process control algorithms with predictive modeling capabilities, featuring real-time optimization through model predictive control strategies, integrated with existing fieldbus networks using foundation fieldbus protocol, requiring HART-enabled smart transmitters with self-diagnostic capabilities and digital asset management integration.'\n\nStakeholder Needs:\n• Operations: Wants to understand daily operational changes and training requirements\n• Maintenance: Needs to know resource and skill requirements for ongoing support\n• Management: Requires cost-benefit analysis and implementation timeline\n• Training Department: Must develop competency programs for multiple skill levels\n\nThe Challenge: Operations manager states: 'I have no idea what they just said, but I need to know if my operators can run this system safely.' Maintenance supervisor adds: 'Will our current team be able to maintain this, or do we need to hire specialists?' Management asks: 'What's the business case and timeline?'\n\nYour engineering counterpart insists: 'The technical accuracy is critical - we can't oversimplify the requirements.'"
    },
    question: "How do you handle this technical translation challenge?",
    options: {
      A: "Ask engineering to simplify their language and remove technical terms",
      B: "Create layered communication with technical details preserved but practical translations added",
      C: "Schedule separate meetings for each department to discuss their specific concerns",
      D: "Focus only on the business benefits and avoid technical details entirely"
    },
    correctAnswer: "B",
    feedback: {
      A: {
        correct: false,
        message: "Removing technical details violates engineering's need for precision and can create implementation errors. Research shows that oversimplified technical communications lead to 34% more project scope changes and 28% more rework during implementation phases.",
        guidingQuestion: "How can you preserve technical accuracy while making information accessible to different audiences?"
      },
      B: {
        correct: true,
        message: "Creating layered communication demonstrates advanced integration of message construction principles with ecosystem understanding and stakeholder analysis. This preserves technical integrity while enabling informed decisions and facilitating cross-functional coordination.",
        explanation: "Layered communication preserves technical accuracy while enabling each stakeholder to understand information at their required level of detail and application focus. Each department gets appropriate detail for proper planning and decision-making while maintaining engineering precision."
      },
      C: {
        correct: false,
        message: "Separate meetings fragment understanding and prevent cross-functional integration. Studies indicate that isolated departmental communications about technical changes result in 41% more coordination issues during implementation.",
        guidingQuestion: "How might different departments need to coordinate their responses to technical changes?"
      },
      D: {
        correct: false,
        message: "Avoiding technical details prevents informed decision-making and proper planning. Analysis shows that business-only communications about technical implementations result in 52% more resource estimation errors and implementation surprises.",
        guidingQuestion: "What level of technical detail does each department need for proper planning and decision-making?"
      }
    }
  },
  4: {
    id: 4,
    title: "The Integration Master Challenge",
    scenario: {
      time: "Day 8, 9:00 AM - Plant Manager's Office",
      description: "The Plant Manager has called you in for a critical assignment: 'We're implementing a plant-wide digital transformation initiative over the next 6 months. Every department will be affected, and I need you to ensure flawless communication and coordination throughout this change.'\n\nThe Initiative Scope:\n• New ERP system affecting all business processes\n• Digital work management changing maintenance and operations procedures\n• Advanced analytics requiring new data management protocols\n• Integrated planning tools connecting all departments digitally\n• Mobile technology for field personnel across all shifts\n\nStakeholder Landscape:\n• Engineering: Excited about analytical capabilities but concerned about data quality\n• Operations: Worried about production disruption during transition\n• Maintenance: Resistant to changing established procedures\n• Supply Chain: Concerned about inventory management system integration\n• HSE: Focused on maintaining compliance during changes\n• Training: Overwhelmed by multi-departmental training requirements\n• IT: Resource-constrained with aggressive timeline demands\n\nMulti-Level Conflicts:\n• Timeline pressure vs. thorough training requirements\n• System integration complexity vs. operational continuity needs\n• Budget constraints vs. comprehensive change management\n• Departmental priorities vs. plant-wide optimization goals\n\nThe Plant Manager continues: 'I've seen too many technology implementations fail due to poor communication and resistance. This one must succeed. You have full authority to design and implement the communication strategy.'"
    },
    question: "What is your integrated communication and change management strategy?",
    options: {
      A: "Create a detailed project plan with technical specifications and distribute to all departments",
      B: "Implement a comprehensive stakeholder engagement framework with integrated conflict resolution protocols",
      C: "Focus on training programs to address resistance and capability gaps",
      D: "Establish a steering committee with representatives from each department"
    },
    correctAnswer: "B",
    feedback: {
      A: {
        correct: false,
        message: "Technical project plans alone don't address stakeholder concerns, resistance management, or communication needs across diverse audiences. Studies show that 71% of digital transformation failures result from inadequate change management and stakeholder engagement rather than technical issues.",
        guidingQuestion: "How do technical plans need to be complemented with communication and relationship management strategies?"
      },
      B: {
        correct: true,
        message: "Implementing a comprehensive stakeholder engagement framework with integrated conflict resolution protocols demonstrates mastery of all course principles working together. This applies sender responsibility at scale, respects ecosystem complexity, and creates sustainable frameworks.",
        explanation: "Successful large-scale change requires integration of all communication principles: sender responsibility, ecosystem understanding, conflict resolution, and sustainable relationship management working together systematically. This approach addresses stakeholder engagement, conflict prevention, multi-layer information architecture, and success monitoring."
      },
      C: {
        correct: false,
        message: "While training is important, focusing solely on training ignores stakeholder analysis, conflict resolution, and ongoing communication needs. Research indicates that training-only approaches to major changes result in 46% higher resistance rates and 38% more implementation delays.",
        guidingQuestion: "What other elements beyond training are needed to ensure successful transformation?"
      },
      D: {
        correct: false,
        message: "Steering committees alone don't ensure effective communication across all levels or address the complex stakeholder dynamics involved. Data shows that committee-driven approaches without comprehensive communication strategies achieve only 23% stakeholder satisfaction rates.",
        guidingQuestion: "How can steering committees be enhanced with broader stakeholder engagement and communication frameworks?"
      }
    }
  }
}