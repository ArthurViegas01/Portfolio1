import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="sectionTitle">Skills</h2>
        <span className="sectionSubtitle">Habilidades técnicas</span>

        <div className="skillsContainer container grid">
            <Frontend/>
            <Backend/>
        </div>
    </section>
  )
}

export default Skills