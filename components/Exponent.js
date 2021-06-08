import React from 'react'
import Expression from './Expression'

const Exponent = ({ operands }) => {
  const { base, exponent } = operands


  return (
    <div style={{display:"flex"}}>
      <Expression expression={base} />
      <div style={{fontSize: ".5em", paddingBottom: "1em"}}>
        <Expression expression={exponent} />
      </div>

    </div>
  )
}

export default Exponent
