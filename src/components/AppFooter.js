import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">Copyright &copy; 2022 All Rights Reserved.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://github.com/a5hi5hx" target="_blank" rel="noopener noreferrer">
          Ashish Paudel
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
