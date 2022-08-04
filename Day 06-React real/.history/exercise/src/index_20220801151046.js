import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import StudentInfoTable from './Components/StudentInfoComponent';
import './StudentInfo.css';
import AlertMe from './Components/Alert';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AlertMe content="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."></AlertMe>);