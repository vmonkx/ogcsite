import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  

  *, &::before, &::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
}

  [type="text"],
  [type="email"],
  [type="url"],
  [type="password"],
  [type="number"],
  [type="date"],
  [type="month"],
  [type="search"],
  [type="tel"],
  [type="time"],
  [multiple],
  textarea,
  select {
    appearance: none;
    background-color: #fff;
    border-color: #6b7280;
    border-width: 1px;
    border-radius: 0px;
    padding-top: 0.5rem;
    padding-right: 0.75rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
   
    box-shadow: rgb(255, 221, 136) 0px 0px 0px 0px, rgb(227, 2, 119) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
    border-color: ${props => props.theme.secondary};
 }

 
}
  
textarea {
    resize: vertical;
}

  
    
`

export { GlobalStyle }
