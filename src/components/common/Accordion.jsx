export default function Accordion ({ info, children }) {
  return (
    <div className='accordion-item'>
      <h2 className='accordion-header' id={`heading${info}`}>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target={`#collapse${info}`} aria-expanded='false' aria-controls={`#collapse${info}`}>
          Season {info}
        </button>
      </h2>
      <div id={`collapse${info}`} className='accordion-collapse collapse show' aria-labelledby={`heading${info}`} data-bs-parent='#accordionExample'>
        <div className='accordion-body'>
          {children}
        </div>
      </div>
    </div>
  )
}
