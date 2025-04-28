import React from 'react';

export default function ExperienceAndEducation() {
  return (
    <section id="experience" className="about-section" style={{marginTop: '5rem'}}>
      <div className="dual-column">
        {/* Work Timeline */}
        <div className="timeline-column">
        <h2>Work 💼</h2>
        <div style={{marginTop: '0.5rem' }} className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">Sept. 2024 – Dec. 2024</span>
              <div className="timeline-content">
                <h4>Standard BioTools</h4>
                <p>Hardware Test Intern</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">Jan. 2024 – April 2024</span>
              <div className="timeline-content">
                <h4>GreenHouse Juice Co.</h4>
                <p>Manfucturing Engineering Intern</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">May 2023 – Sept. 2023</span>
              <div className="timeline-content">
                <h4>JMP Solutions</h4>
                <p>Controls Engineering Intern</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="timeline-column">
          <h2>Education 🎓</h2>
          <div style={{marginTop: '0.5rem' }} className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2022 – 2027 (expected)</span>
              <div className="timeline-content">
                <h4>University of Waterloo</h4>
                <p>BASc Mechatronics Engineering</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2018 – 2022 </span>
              <div className="timeline-content">
                <h4>Beamsville District Secondary School</h4>
                <p>Ontario Secondary School Dipolma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}