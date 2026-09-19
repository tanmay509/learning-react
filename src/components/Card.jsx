export function Card(props) {
  return (
    <div>
      <div style={{
        backgroundColor: '#212121',
        color: 'white',
        padding: '32px',
        borderRadius: '12px',
        minWidth: '220px',
        maxWidth: '100%',
        width: '100%',
        boxSizing: 'border-box',
        boxShadow: '0 4px 16px rgba(0,0,0,0.20)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '1 1 220px'
      }}
      >
   
      
        <img
          src={props.im}
          alt="Profile"
          style={{
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            marginBottom: '18px',
            border: '3px solid #fff'
          }}
        />
        <h2 style={{margin: '0 0 10px 0', fontWeight: '600'}}>{props.name}</h2>
        <p style={{margin: '0 0 12px 0', color: '#bdbdbd'}}>{props.role}</p>
        <p style={{textAlign: 'center', fontSize: '15px', margin: 0}}>
          {props.des}
        </p>
      </div>

    </div>
  )
}