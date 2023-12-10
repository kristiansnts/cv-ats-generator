import { useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Modal from "../layout/Modal";
import ModalContext from "../../hooks/ModalContext";
import Form from "../layout/Form";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    return ( 
        <>
            <Header />

            <div className="container">
                <div className="curricullum-form">
                    <div className="action-button">
                        <button>Buat Baru</button>
                        <button>Contoh Sample</button>
                    </div>
                    <Form />
                </div>
                <div className="ats-paper">
                    <div className="modal-header">
                        <h1>Kristian Epa Froditus S</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quasi temporibus perspiciatis pariatur beatae. Provident rem optio sequi et esse.</p>
                        <div className="personal">
                            <p>Lokasi: Ngawi</p>
                            <p>Email: epafroditus.kristian@gmail.com</p>
                            <p>LinkedIn: kristiansnts</p>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="educations">
                            <h3>Riwayat Pendidikan</h3>
                            <div className="schools">
                                <div className="school-name">
                                    <h4>Universitas Kristen Immanuel</h4>
                                    <p>Sarjana Sains/Fisika (S.Si)</p>
                                </div>
                                <span>September 2016 - Agustus 2020</span>
                            </div>
                            <ul className="achievment-list">
                                <li>Peserta Olimpiade Nasional Matematika & IPA (ONMIPA) 2018</li>
                                <li>Peserta International Seminar “Opportunities and Challanges of Photovoltaic Energy in Indonesia” 2018</li>
                                <li>Peserta Biogas International Seminar 2017</li>
                            </ul>
                            <div className="schools">
                                <div className="school-name">
                                    <h4>SMA Negeri 2 Ngawi</h4>
                                    <p>Jurusan IPA</p>
                                </div>
                                <span>2013 - 2016</span>
                            </div>
                        </div>
                        <div className="experiences">
                            <h3>Pengalaman Organisasi</h3>
                            <div className="organization">
                                <div className="organization-name">
                                    <h4>Koordinator Divisi Badan Eksekutif Mahasiswa (BEM)</h4>
                                </div>
                                <span>2018 - 2019</span>
                            </div>
                            <ul className="experience-list">
                                <li>Bertanggung Jawab terhadap setiap acara yang diselenggarakan</li>
                                <li>Membuat event yang meningkatkan nilai kampus</li>
                            </ul>
                            <div className="organization">
                                <div className="organization-name">
                                    <h4>Koordinator Divisi Senat Mahasiswa Fisika & Komputer (SMFISKOM)</h4>
                                </div>
                                <span>2017 - 2018</span>
                            </div>
                            <ul className="experience-list">
                                <li>Bertanggung Jawab terhadap setiap acara yang diselenggarakan</li>
                                <li>Membuat program kegiatan yang meningkatkan kompetensi mahasiswa FISKOM
                                </li>
                            </ul>
                        </div>
                        <div className="skills">
                            <h3>Skills</h3>
                            <ul className="skills-list">
                                <li>Microsoft Word</li>
                                <li>Microsoft Excell</li>
                                <li>Microsoft Powerpoint</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <ModalContext.Provider value={[isOpen, setIsOpen]}>
                <Footer />
                <Modal />
            </ModalContext.Provider>

            <div 
                id="overlay" 
                className={isOpen ? "active": ""}
                onClick={() => setIsOpen(false)}
            ></div>
        </>
     );
}
 
export default Home;