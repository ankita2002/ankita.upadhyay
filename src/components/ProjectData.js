export const projectsData = [
  {
    slug: "near-field-far-field-transformation",
    title: "Near Field Measurements and Far Field Transformation of a Large Parabolic Antenna",
    subtitle: "RF Measurement and Antenna Characterization",
    date: "March 2024 – August 2025",

    shortDescription:
      "Team project focused on near field RF measurements, data acquisition, and MATLAB based far field transformation of a 4.5 meter parabolic antenna.",

    skills: [
      "RF Measurement",
      "VNA",
      "Antenna Characterization",
      "MATLAB",
      "Spherical Wave Expansion",
      "Spherical Harmonics",
      "Data Processing",
      "Far Field Transformation",
      "Signal Analysis",
      "Troubleshooting",
    ],

    details: [
      "Operated the complete near field RF measurement setup including VNA, dual polarized probe, RF switch, LNA, attenuator, and precision rotator to acquire stable S21 amplitude phase datasets for a 4.5 meter parabolic antenna.",
      "Acquired and processed 180 near field readings per polarization, converting raw magnitude phase data into structured datasets for modelling and far field transformation.",
      "Resolved LOS limitations, rotation constraints, reflections, and wind noise issues through iterative on site troubleshooting, optimizing probe placement at 4.46 m.",
      "Developed the full MATLAB workflow for near field to far field transformation using spherical wave expansion, spherical harmonics, and modal coefficient extraction.",
      "Validated the algorithm using synthetic antenna datasets, achieving radiation patterns with approximately 3 degree HPBW and around 24 dBi directivity.",
    ],
  },

  {
    slug: "advanced-modulation-sdr-measurement",
    title: "Advanced Modulation and SDR Measurement",
    subtitle: "MATLAB Simulink and SDR Based RF Signal Analysis",
    date: "January 2025 – June 2025",

    shortDescription:
      "Project involving RF measurement setups, OFDM analysis, mixed signal impairment study, and SDR based receiver implementation for wireless communication systems.",

    skills: [
      "MATLAB",
      "Simulink",
      "SDR",
      "OFDM",
      "MIMO",
      "SISO",
      "Signal Processing",
      "Spectrum Analyzer",
      "Wireless Communication",
      "Channel Capacity",
    ],

    details: [
      "Configured RF measurement setups to analyse OFDM signals using a spectrum analyzer, evaluating carrier frequency, pilot spacing, occupied bandwidth, and cyclic prefix behaviour.",
      "Investigated mixed signal impairments including phase drift, frequency offset, multipath delay, and noise by examining constellation distortions before and after equalization.",
      "Implemented channel capacity estimation and adaptive loading algorithms to study SNR, power allocation, and sub channel behaviour in frequency selective channels.",
      "Built SDR based SISO and MISO receivers for Alamouti transmission, performing downconversion, matched filtering, SNR estimation, synchronization, and symbol recovery workflows.",
    ],
  },

  {
    slug: "motion-detection-cw-radar",
    title: "Motion Detection using Continuous Wave Radar",
    subtitle: "24 GHz Radar Signal Analysis",
    date: "February 2025 – July 2025",

    shortDescription:
      "Radar based project focused on motion detection using a 24 GHz continuous wave radar module and signal behaviour analysis across multiple motion scenarios.",

    skills: [
      "Radar Systems",
      "24 GHz CW Radar",
      "FFT",
      "Doppler Analysis",
      "Signal Processing",
      "Data Collection",
      "Performance Evaluation",
      "Documentation",
    ],

    details: [
      "Used a 24 GHz CW radar module, analysing over 300 motion samples to study signal variations and detection consistency.",
      "Evaluated FFT outputs, Doppler signatures, and amplitude trends to understand system performance under different motion scenarios.",
      "Prepared structured documentation on detection accuracy and system behavior while managing data collection, processing, and verification workflows.",
    ],
  },

  {
    slug: "ai-gym-buddy",
    title: "AI Gym Buddy",
    subtitle: "Pose Estimation and Embedded Workout Assistant",
    date: "September 2022 – February 2023",

    shortDescription:
      "Real time workout assistant built on Raspberry Pi using computer vision, pose estimation, and embedded integration for movement analysis.",

    skills: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Raspberry Pi",
      "Computer Vision",
      "Pose Estimation",
      "KNN",
      "Arduino",
      "Embedded Systems",
    ],

    details: [
      "Built a real time workout assistant on Raspberry Pi using Python, OpenCV, and Mediapipe, performing pose estimation from 33 body landmarks for movement analysis.",
      "Implemented feature extraction and a KNN classifier, improving pose recognition accuracy through iterative testing.",
      "Integrated multiple Arduino based robotic platforms, combining embedded control with computer vision to deliver a unified prototype.",
    ],
  },
];