/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { createPortal } from "react-dom";
import ModalContext from "../../hooks/ModalContext";

const Modal = () => {
    const [isOpen, setIsOpen] = useContext(ModalContext)

    if(!isOpen) return null

    return createPortal(
        <div className={`modal ${isOpen ? "active" : ""}`}>
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
            <div className="modal-footer">
                <button data-close-button className="close-button" onClick={() => setIsOpen(false)}>Keluar</button>
            </div>
        </div>
    , document.getElementById('modal'));
}
 
export default Modal;