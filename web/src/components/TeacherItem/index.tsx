import React from 'react'

import './styles.css'

import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg'

interface TeacherItemProps {
  teacherName: string;
  subject: string;
  teacherDescription: string;
  pricePerHour: string;
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  teacherName,
  subject,
  teacherDescription,
  pricePerHour
}) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          alt="João Paulo"
          src="https://avatars2.githubusercontent.com/u/64229622?s=460&u=a57fc70900b2e216533482478c62626bffcc21df&v=4"
        />
        <div>
          <strong>{teacherName}</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        {teacherDescription}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {pricePerHour}</strong>
        </p>
        <button type="button">
          <img src={WhatsAppIcon} alt="WhatsApp"/>
          <p>Entrar em contato</p>
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem