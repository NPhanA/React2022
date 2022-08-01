import { Component } from "react";

function Alert (props) {
        return (
            <div className={props.className} role={props.role}>
            Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.
            </div>
       );
}

export default Alert;