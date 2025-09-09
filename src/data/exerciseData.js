export const exerciseContent = {
  1: {
    id: 1,
    title: "Emergency Communication Matrix",
    description: "Create a communication matrix for the emergency shutdown scenario:",
    fields: [
      {
        id: 'engineering_info',
        label: 'Engineering - Critical Information Needed',
        type: 'textarea',
        placeholder: 'What specific information does Engineering need immediately?'
      },
      {
        id: 'engineering_channel',
        label: 'Engineering - Communication Channel',
        type: 'select',
        options: ['Technical report + phone', 'Email only', 'Meeting only', 'Radio communication']
      },
      {
        id: 'engineering_timeline',
        label: 'Engineering - Timeline',
        type: 'select',
        options: ['Immediate', 'Within 10 min', 'Within 30 min', 'Within 1 hour']
      },
      {
        id: 'operations_info',
        label: 'Operations - Critical Information Needed',
        type: 'textarea',
        placeholder: 'What specific information does Operations need immediately?'
      },
      {
        id: 'operations_channel',
        label: 'Operations - Communication Channel',
        type: 'select',
        options: ['Direct call + written checklist', 'Email only', 'Meeting only', 'Radio communication']
      },
      {
        id: 'operations_timeline',
        label: 'Operations - Timeline',
        type: 'select',
        options: ['Immediate', 'Within 10 min', 'Within 30 min', 'Within 1 hour']
      },
      {
        id: 'maintenance_info',
        label: 'Maintenance - Critical Information Needed',
        type: 'textarea',
        placeholder: 'What specific information does Maintenance need immediately?'
      },
      {
        id: 'maintenance_channel',
        label: 'Maintenance - Communication Channel',
        type: 'select',
        options: ['Radio + work permit system', 'Email only', 'Meeting only', 'Phone call']
      },
      {
        id: 'maintenance_timeline',
        label: 'Maintenance - Timeline',
        type: 'select',
        options: ['Immediate', 'Within 10 min', 'Within 30 min', 'Within 1 hour']
      },
      {
        id: 'hse_info',
        label: 'HSE - Critical Information Needed',
        type: 'textarea',
        placeholder: 'What specific information does HSE need immediately?'
      },
      {
        id: 'hse_channel',
        label: 'HSE - Communication Channel',
        type: 'select',
        options: ['Formal notification + investigation protocol', 'Email only', 'Meeting only', 'Phone call']
      },
      {
        id: 'hse_timeline',
        label: 'HSE - Timeline',
        type: 'select',
        options: ['Immediate', 'Within 10 min', 'Within 15 min', 'Within 30 min']
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "Emergency Communication Framework",
          points: [
            "Engineering: Sensor data, diagnostic codes, system status via technical report + phone - Immediate response needed",
            "Operations: Safety status, restart requirements, clearances needed via direct call + written checklist - Immediate response needed",
            "Maintenance: Equipment access needs, safety isolation status via radio + work permit system - Within 10 minutes",
            "HSE: Incident classification, personnel safety, reporting requirements via formal notification + investigation protocol - Within 15 minutes"
          ]
        },
        {
          title: "Communication Channel Selection",
          points: [
            "Technical teams need detailed written documentation plus verbal clarification",
            "Operational teams need immediate verbal direction with written backup procedures",
            "Safety teams require formal protocols that create proper audit trails",
            "Management needs executive summaries with regular update schedules"
          ]
        },
        {
          title: "Timeline Coordination",
          points: [
            "Immediate actions enable parallel response across departments",
            "Staggered timelines prevent communication overload while ensuring coverage",
            "Priority sequencing addresses safety first, then operational recovery",
            "Regular update cycles maintain coordination throughout response"
          ]
        }
      ],
      keyTakeaways: [
        "Emergency communications require rapid, department-specific information tailored to immediate action needs",
        "Channel selection must match both urgency and documentation requirements",
        "Timeline coordination enables parallel response while maintaining proper sequence",
        "Clear communication prevents costly delays and ensures coordinated emergency response"
      ]
    }
  },
  2: {
    id: 2,
    title: "Stakeholder Analysis Worksheet",
    description: "Analyze the underlying needs and constraints for each project stakeholder:",
    fields: [
      {
        id: 'alpha_position',
        label: 'Project Alpha - Surface Position',
        type: 'text',
        placeholder: 'What is Operations stating as their position?'
      },
      {
        id: 'alpha_needs',
        label: 'Project Alpha - Underlying Needs',
        type: 'textarea',
        placeholder: 'What does Operations really need to achieve?'
      },
      {
        id: 'alpha_flexibility',
        label: 'Project Alpha - Flexibility Areas',
        type: 'textarea',
        placeholder: 'Where might Operations have some flexibility?'
      },
      {
        id: 'beta_position',
        label: 'Project Beta - Surface Position',
        type: 'text',
        placeholder: 'What is Engineering stating as their position?'
      },
      {
        id: 'beta_needs',
        label: 'Project Beta - Underlying Needs',
        type: 'textarea',
        placeholder: 'What does Engineering really need to achieve?'
      },
      {
        id: 'beta_flexibility',
        label: 'Project Beta - Flexibility Areas',
        type: 'textarea',
        placeholder: 'Where might Engineering have some flexibility?'
      },
      {
        id: 'gamma_position',
        label: 'Project Gamma - Surface Position',
        type: 'text',
        placeholder: 'What is Environmental stating as their position?'
      },
      {
        id: 'gamma_needs',
        label: 'Project Gamma - Underlying Needs',
        type: 'textarea',
        placeholder: 'What does Environmental really need to achieve?'
      },
      {
        id: 'gamma_flexibility',
        label: 'Project Gamma - Flexibility Areas',
        type: 'textarea',
        placeholder: 'Where might Environmental have some flexibility?'
      },
      {
        id: 'integration_opportunities',
        label: 'Integration Opportunities',
        type: 'textarea',
        placeholder: 'How might these projects share resources or be coordinated?'
      },
      {
        id: 'recommended_solution',
        label: 'Your Recommended Integrated Solution',
        type: 'textarea',
        placeholder: 'Describe your solution that addresses multiple stakeholder needs...'
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "Stakeholder Analysis Framework",
          points: [
            "Alpha (Operations): Surface position 'Emergency repair needed now' - Underlying need: Maintain production capacity, avoid extended downtime",
            "Beta (Engineering): Surface position 'Regulatory deadline is non-negotiable' - Underlying need: Meet compliance requirements, avoid penalties", 
            "Gamma (Environmental): Surface position 'Shutdown risk is unacceptable' - Underlying need: Maintain regulatory compliance, protect facility license"
          ]
        },
        {
          title: "Flexibility Analysis",
          points: [
            "Operations: Could potentially operate at reduced capacity temporarily if safety systems allow",
            "Engineering: Timeline might have buffer if properly analyzed, could share safety isolation procedures",
            "Environmental: Might accept phased implementation if regulatory approval obtained"
          ]
        },
        {
          title: "Integration Strategy",
          points: [
            "Sequence projects to share safety isolation procedures and reduce total downtime",
            "Coordinate with operations for planned capacity reduction during critical phases",
            "Identify environmental work that can occur in parallel with safety upgrades",
            "Negotiate regulatory timeline extensions based on comprehensive safety improvements"
          ]
        }
      ],
      keyTakeaways: [
        "Look beyond stated positions to understand underlying concerns and motivations",
        "Creative solutions often provide value to multiple stakeholders within existing constraints",
        "Stakeholder analysis reveals integration opportunities that address multiple needs",
        "Win-win solutions build stronger stakeholder relationships for future projects"
      ]
    }
  },
  3: {
    id: 3,
    title: "Multi-Layer Communication Design",
    description: "Design a layered communication strategy for the control system implementation:",
    fields: [
      {
        id: 'executive_summary',
        label: 'Executive Summary (Management)',
        type: 'textarea',
        placeholder: 'High-level summary for management decision-making...'
      },
      {
        id: 'operational_impact',
        label: 'Operational Impact Summary (Operations)',
        type: 'textarea',
        placeholder: 'Day-to-day operational changes and requirements...'
      },
      {
        id: 'maintenance_requirements',
        label: 'Maintenance Requirements Summary (Maintenance)',
        type: 'textarea',
        placeholder: 'Maintenance skill and resource requirements...'
      },
      {
        id: 'training_needs',
        label: 'Training Needs Assessment (Training Department)',
        type: 'textarea',
        placeholder: 'Training requirements and competency levels...'
      },
      {
        id: 'communication_channels',
        label: 'Communication Channels for Each Layer',
        type: 'ranking',
        options: [
          'Executive briefing presentation',
          'Hands-on demonstration sessions',
          'Technical documentation package',
          'Interactive training modules'
        ]
      },
      {
        id: 'success_metrics',
        label: 'Success Metrics for Each Stakeholder Group',
        type: 'textarea',
        placeholder: 'How will you measure communication effectiveness for each group?'
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "Multi-Layer Communication Design",
          points: [
            "Executive Summary: New control system improves process efficiency by 12%, reduces operator workload, provides predictive maintenance. Investment: $2.3M, Timeline: 8 months, ROI: 18 months",
            "Operational Impact: System automates routine adjustments, operators monitor enhanced graphics and intelligent alarms. Training: 40 hours per operator. Operations become more supervisory",
            "Maintenance Requirements: Requires network troubleshooting skills and smart instrument diagnostics. 80-hour certification program needed. Recommend 2 technicians for advanced training"
          ]
        },
        {
          title: "Training Architecture",
          points: [
            "Three competency levels: Basic operation (40 hrs), Advanced diagnostics (80 hrs), Expert troubleshooting (120 hrs)",
            "Curriculum covers both technical skills and new procedures",
            "Hands-on simulation and real-world application components",
            "Ongoing support and refresher training protocols"
          ]
        },
        {
          title: "Communication Channel Strategy",
          points: [
            "Executive briefings for strategic decision-making and resource allocation",
            "Technical documentation for engineering accuracy and implementation reference",
            "Hands-on demonstrations for operational understanding and buy-in",
            "Interactive training modules for skill development and competency verification"
          ]
        }
      ],
      keyTakeaways: [
        "Layered communication preserves technical accuracy while enabling stakeholder-appropriate understanding",
        "Each layer serves specific decision-making and planning needs",
        "Communication channels must match both content complexity and audience preferences",
        "Success requires coordination across all layers while maintaining message consistency"
      ]
    }
  },
  4: {
    id: 4,
    title: "Comprehensive Communication Strategy Design",
    description: "Design your integrated communication and change management strategy:",
    fields: [
      {
        id: 'stakeholder_framework',
        label: '1. Stakeholder Communication Framework',
        type: 'textarea',
        placeholder: 'Design department-specific communication approaches for each stakeholder group...'
      },
      {
        id: 'conflict_protocols',
        label: '2. Conflict Prevention and Resolution Protocols',
        type: 'textarea',
        placeholder: 'Establish proactive conflict management systems...'
      },
      {
        id: 'information_architecture',
        label: '3. Multi-Layer Information Architecture',
        type: 'textarea',
        placeholder: 'Create information flow systems for different audiences...'
      },
      {
        id: 'relationship_systems',
        label: '4. Relationship Maintenance Systems',
        type: 'textarea',
        placeholder: 'Design ongoing stakeholder engagement mechanisms...'
      },
      {
        id: 'monitoring_framework',
        label: '5. Success Monitoring and Adjustment Framework',
        type: 'textarea',
        placeholder: 'Establish feedback loops and adaptation protocols...'
      },
      {
        id: 'priority_ranking',
        label: 'Priority Ranking of Strategy Components',
        type: 'ranking',
        options: [
          'Stakeholder engagement and buy-in',
          'Technical implementation coordination',
          'Training and capability development',
          'Risk management and mitigation'
        ]
      },
      {
        id: 'success_indicators',
        label: 'Key Success Indicators',
        type: 'textarea',
        placeholder: 'What metrics will indicate successful communication and change management?'
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "Comprehensive Communication Strategy",
          points: [
            "Stakeholder Framework: Engineering gets technical workshops and data quality protocols, Operations gets impact assessments and phased plans, Maintenance gets procedure evolution roadmaps",
            "Conflict Prevention: Early warning systems via pulse surveys, structured resolution frameworks, cross-functional liaison networks",
            "Information Architecture: Executive dashboards, departmental briefings, technical documentation, field communications - each serving specific decision-making needs"
          ]
        },
        {
          title: "Relationship Management Systems",
          points: [
            "Regular Touchpoints: Weekly department liaisons, bi-weekly steering committee, monthly all-hands updates",
            "Feedback Integration: Suggestion systems, rapid response protocols, continuous improvement processes",
            "Recognition Programs: Milestone celebrations, team contribution acknowledgment, success story sharing"
          ]
        },
        {
          title: "Success Monitoring Framework",
          points: [
            "Quantitative Metrics: System adoption rates, error frequencies, efficiency improvements, timeline adherence",
            "Qualitative Measures: Stakeholder satisfaction surveys, resistance indicators, relationship health assessments",
            "Adjustment Protocols: Monthly strategy reviews, rapid response capabilities, course correction procedures"
          ]
        }
      ],
      keyTakeaways: [
        "Large-scale change requires integration of all communication principles working systematically",
        "Proactive conflict management prevents issues from escalating and damaging relationships",
        "Multi-layer information architecture serves different decision-making needs simultaneously",
        "Success monitoring enables continuous improvement and rapid course correction"
      ]
    }
  }
}