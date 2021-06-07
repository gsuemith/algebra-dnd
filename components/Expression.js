import React from 'react'

const operators = {
  sum: "+"
}

const Expression = ({ expression }) => {
  const { operator, operands, variable, number } = expression

  if (variable) {
    return <div>{`${variable} variable`}</div>
  }

  if (number) {
    return <div>{`${number} number`}</div>
  }

  return (
    <div>
      {
        operands.map((expression, idx) => (
        <>
          <Expression expression={expression}/>
          { (operator === "sum" && idx === expressions.length - 1) && ` + operator`}
        </>
        ))
      }
    </div>
  )
}

export default Expression
