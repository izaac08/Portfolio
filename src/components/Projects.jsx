import React, { useState } from 'react';
import './Projects.css';
import LCF from '../assets/LifeCycle.png';
import camera from '../assets/camera.jpeg';
import micro from '../assets/micro.png';
import SimX from '../assets/simulationx.png';
import Inv from '../assets/inventoryTracker.png';

const projects = [
  {
    title: 'Life Cycle Testing',
    description:'Developed a system to automate life cycle testing of latch and slider mechanisms to evaluate durability over their expected lifespan.',
    image: LCF,
    tags: [ 'Validation Testing', 'Automated Data Acquistion', 'Python Scripting', 'OOP', 'Circuit Design', 'OpenCV', 'Serial Communication', 'C'],
    source: null,
    website: null,
    transition: 'click to see summary',
    summary: 'Conducted two automated life cycle tests via a Python script. The first test validated the latch mechanism’s ability to fully open, close, and interlock the device’s two modules.' +
    ' The second ensured the device could still pass the ground bond test after the slider fully extended and retracted the modules. Both tests were executed in a single cycle, repeated 400 times. Each cycle began with a photo of the latch to confirm interlocking using OpenCV. If successful,' +
    ' the script sent serial commands to a PCB to open and close the latch (first test). It then set a GPIO pin high, which controlled a NMOS transistor to extend a pneumatic actuator fixed to the slider (second test). Once the slider retracted, the camera again verified latch interlocking. After each cycle, the status of each micro test (i.e open status,'+
     ' close status, interlocked status, etc) were logged to an excel file after the 400 cycles. After two days of cycling, the latch passed every test and met ground bond requirements. However, wear from friction was observed and documented for further mechanical analysis.'
  },

  {
    title: 'Inventory Tracker',
    description: 'Expo Go App developed to make the inventory tracking process more efficient at Malivoire.',
    image: Inv,
    tags: ['Expo Go', 'React Native', 'JavaScript', 'Mobile Development'],
    source: null,
    website: null,
    transition: 'click to see summary',
    summary: 'Built a mobile inventory tracking app in Expo Go (React Native) to streamline wine inventory management at Malivoire.'+
    'The app features a dynamic search-and-match system with a scrollable wine list, allowing users to quickly locate entries or add/delete items if missing.' +
    'State management was used to track user inputs for skids, cases, and loose bottles, which were automatically converted into total bottle counts.' +
    'Data was persisted locally using AsyncStorage and formatted into an Excel-compatible file with structured rows for each entry.' +
    'A download function enabled users to export the file directly to their device for reporting. The project was inspired by a conversation with my dad, Malivoire’s GM,' +
    'who identified inefficiencies in their existing manual process, and I built it as a fun project to help him out while developing my mobile app skills.'

  },
  
  {
    title: 'H2O2 Detection System',
    description: 'Camera system designed to detect and log hydrogen peroxide spray presence.',
    image: camera,
    tags: ['OpenCV', 'Python', 'RaspberryPi', 'Fusion360', '3D printing'],
    source: null,
    website: null,
    transition: 'click to see summary',
    summary: 'Developed a camera-based detection system to monitor hydrogen peroxide spray events on a Gable Top packaging line. A Raspberry Pi-controlled camera was mounted on a custom adjustable 3D-printed rig and programmed to track cartons as they passed beneath the sprayer. Using OpenCV, the script continuously analyzed a selected region of the video feed and counted the number of white pixels. If the initial threshold was met, the presence of a carton was confirmed, prompting the script to shift its focus to a second region around the sprayer nozzle.' +
    ' If the nozzle region’s threshold was also met, the script confirmed spray detection. A green LED would be flashed for half a second, and the script would log a pass with a timestamp to an Excel sheet.' +
    ' If no spray was detected, a red LED was flashed and a fail with a timestamp was recorded instead. The system automatically reset after each detection, awaiting the next carton. This system addressed long-standing concerns that cartons were occasionally missing the hydrogen peroxide spray (an issue that could significantly reduce product shelf life) by providing a reliable method of confirmation.'
  },
 
  {
    title: 'Two-Axis Motion Project',
    description: 'Used two potentiometers for precise X and Y motor control.',
    image: micro,
    tags: ['Interrupts', 'ADCs', 'Git', 'C'],
    source: null,
    website: null,
    transition: 'click to see summary',
    summary: 'Designed and implemented a two-axis motor control system using an STM32 microcontroller equipped with a multi-channel, 8-bit ADC. Two potentiometers were connected to separate ADC channels to control the voltage input, with the ADC output used to determine motor speed and direction (including reverse). Four non-vectored interrupts were programmed to detect limit switch activations and define the travel bounds of each axis. The system was used to guide a target to a specified coordinate, with its speed and positional accuracy evaluated over three trials based on instructor-defined test scenarios.'
  },
  {
    title: 'Modelling Segway - SimluationX',
    description: 'Built a Segway simulation in SimulationX and optimized how far it could travel within specific limits.',
    image: SimX,
    tags: ['SimulationX', 'Simulink', 'ODEs'],
    source: 'https://github.com/izaac08/Modelling-Segway/blob/main/Modelling%20Segway%20Technical%20Report.pdf',
    website: null,
    transition: 'click to see summary',
    summary: 'Simulated the forward motion of a segway using analytical modeling, Simulink, and SimulationX. The study involved deriving equations of motion, linearizing them with small-angle approximations, and building a Simulink block diagram to predict the system’s behavior.' +
' A 3D experimental model was then created in SimulationX, incorporating mechanical joints and visual elements to simulate realistic motion. Through many test iterations via the Variant Wizard, key variables like user lean angle, transporter tilt, and thrust force were tuned. The final configuration achieved a forward displacement of 5.18 meters before falling and without exceeding the 20 km/h speed limit.'
  
  },

  // {
  //   title: '3D printing',
  //   description: '3D Printing Projects – For Fun and Function',
  //   image: '/images/Watchstand.jpeg',
  //   tags: ['3D printing', 'Fusion360'],
  //   source: null,
  //   website: null,
  //   transition: 'click to see summary',
  //   summary: 'laksdjfpsadofjnvpvjeiojfaeprfopiajwoifjdsklvna;dkfjgphgfasdnv'
  // }
];


export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="projects" className="projects-section" style={{ marginTop: '2rem' }}>
      <h2>Projects</h2>
      <div className="projects-grid" style={{ marginTop: '1rem' }}>
        {projects.map((project, index) => (
          <div
            className={`project-card ${expandedIndex === index ? 'expanded' : ''}`}
            key={index}
            onClick={() => handleToggle(index)}
            style={{ cursor: 'pointer' }}
          >
            {expandedIndex === index ? (
              <>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              </>
            ) : (
              <>
              <div className="project-content">
                <img src={project.image} alt={project.title} className="project-image" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.source && (
                    <a href={project.source} target="_blank" rel="noreferrer" className="btn">
                      Link to Report
                    </a>
                  )}
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noreferrer" className="btn">
                      Website
                    </a>
                  )}
                </div>
                {project.transition && (
                <div className="project-note">
                 <small>{project.transition}</small>
                </div>
                )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

