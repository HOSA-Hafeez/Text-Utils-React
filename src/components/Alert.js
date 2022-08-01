import React from 'react'

export default function Alert(props) {
    const capatilize =(word)=>{
        const lower =word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
  return (
    
    props.Alert &&<div class={`alert alert-${props.Alert.type}`} role="alert">
  <strong>{capatilize(props.Alert.type)}</strong> {capatilize(props.Alert.msg)}
</div>
  )
}
