import React from 'react'
import ptBR from "./pt-BR.json"
import enUS from "./en-US.json"

const TranslateText = (props) => {
    console.log(props)
    const languages = ['pt-BR', 'en-US']
    const defaultLanguage = languages.includes(navigator.language) ? navigator.language : 'en-US'
    const translationsJsonFile = defaultLanguage === 'pt-BR' ? ptBR : enUS

    return `${translationsJsonFile[props.id]}`
  }

export default TranslateText
