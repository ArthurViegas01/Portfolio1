import React from 'react'

const Backend = () => {
  return (
    <div className="skillsContent">
        <h3 className="skillsTitle">Desenvolvedor Backend</ h3>
    
        <div className="skillsBox">
            <div className="skillsGroup">
                <div className="skillsData">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skillsName">Java</h3>
                    <span className="skillsLevel">Intermediário</span>
                </div>
                </div>
    
                <div className="skillsData">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skillsName">SQL</h3>
                    <span className="skillsLevel">Básico</span>
                </div>
                </div>
            </div>

            <div className="skillsGroup">
                <div className="skillsData">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skillsName">Node.js</h3>
                    <span className="skillsLevel">Básico</span>
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Backend