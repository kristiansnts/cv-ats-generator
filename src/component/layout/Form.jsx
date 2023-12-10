/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { createRef, useRef, useState } from "react"

/* eslint-disable react/prop-types */
const formHeadData = [
    {
        id: "personalData",
        title: "Data Pribadi",
        description: "Data pribadi ini akan digunakan sebagai acuan utama CV ATS",
        inputList: [
            {
                inputName: "fullname",
                label: "Nama Lengkap"
            },
            {
                inputName: "city",
                label: "Kota"
            },
            {
                inputName: "email",
                label: "Email"
            },
            {
                inputName: "linkedin",
                label: "LinkedIn"
            },
            {
                inputName: "description",
                label: "Ceritakan tentang anda"
            },
        ],
        actionList: []
    },
    {
        id: "educationData",
        title: "Data Sekolah",
        description: "Data sekolah ini akan digunakan sebagai tracking data edukasi CV ATS anda",
        inputList: [
            {
                inputName: "schoolname",
                label: "Nama Sekolah"
            },
            {
                inputName: "year",
                label: "Tahun Ajar"
            },
            {
                inputName: "achiev",
                label: "Pencapaian"
            },
        ],
        actionList: [
            {
                classname: "add-school",
                label: "Tambah Sekolah"
            },
            {
                classname: "add-achievment",
                label: "Tambah Pencapaian"
            },
        ]
    },
    {
        id: "experienceData",
        title: "Data Pengalaman",
        description: "Data Pengalaman ini akan dapat diisi pengalaman pekerjaan maupun pengalaman organisasi anda.",
        inputList: [
            {
                inputName: "organization",
                label: "Organisasi/Perusahaan"
            },
            {
                inputName: "position",
                label: "Masa Jabatan"
            },
            {
                inputName: "experience",
                label: "Pengalaman"
            },
        ],
        actionList: [
            {
                classname: "add-organization",
                label: "Tambah Organisasi"
            },
            {
                classname: "add-experience",
                label: "Tambah Pengalaman"
            },
        ]
    },
    {
        id: "skillsData",
        title: "Kemampuan dan Keahlian",
        description: "Data ini akan digunakan untuk menunjukkan kemampuan dan keahlian CV ATS anda",
        inputList: [
            {
                inputName: "skillset",
                label: "Daftar kemampuan / keahlian anda"
            },
        ],
        skillList: [
            "Microsoft Word",
            "Microsoft Excell",
            "Microsoft Powerpoint"
        ],
        actionList: []
    }
]

const Form = () => {
    const [activeIndex, setActiveIndex] = useState([])
    const panelRefs = useRef([])

    function handleClick(index) {
        const isActive = activeIndex.includes(index)
        setActiveIndex((prevIndex) => 
            isActive ? prevIndex.filter((i) => i !== index) : [...prevIndex, index]
        )
    }

    return (
        formHeadData.map((data, index) => {
            const isActive = activeIndex.includes(index)
            const panelRef = panelRefs[index] || (panelRefs[index] = createRef())
            return (
                <div className={data.id} key={index}>
                    <div 
                        className="form-head"
                        onClick={() => handleClick(index)}
                    >
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                    </div>
                    <form 
                        className={data.id !== "personalData" ? "form-group form-hide" : ""} 
                        style={isActive ? {maxHeight: panelRef.current.scrollHeight*3 + "px"} : null}
                        ref={panelRef}
                    >
                        {data.inputList.map(inputs => (
                            <InputGroup key={inputs.inputName} inputName={inputs.inputName} label={inputs.label}/>
                        ))}
                        <div className="button-group">
                            {data.actionList.map(actions => (
                                <ButtonGroup key={actions.classname} actionList={actions} />
                            ))}
                        </div>
                        {data.id == "skillsData" 
                            ? <SkillSet skillList={data.skillList} />
                            : null
                        }
                    </form>
                </div>
            )
        }
        )
    )
}

const InputGroup = ({ inputName, label }) => {
    return (
        <div className={`input-group ${inputName}`}>
            {inputName == "description" 
            ? <textarea className="floating-input" rows="5" cols="51"></textarea> 
            : <input className="floating-input" type={inputName == "email" ? "email" : "text"} />}
            <label className="floating-label">{label}</label>
        </div>
    )    
}

const ButtonGroup = ({ actionList }) => {
    return (
            <button key={actionList.classname} className={actionList.classname}>{actionList.label}</button>
    )
}

const SkillSet = ({ skillList }) => {
    return (
        <div className="skill-list">
            <ul>
                {skillList.map((skill, index) => (
                 <li key={`skillList-${index}`}>
                    <input type="checkbox" id={`skill-${index}`} className="skill-delete" />
                    <FontAwesomeIcon icon={faTrash} className="skill-icon"/>
                    <label htmlFor={`skill-${index}`} >{skill}</label>
                </li> 
                ))}
            </ul>
        </div>
    )
}

export default Form;