import { Form, Input } from "antd";
import React from "react";

class CreateHealthData extends React.Component {

    render() {
        return (
            <Form name="体检数据录入" autoComplete="off">
                <Form.Item label="尿酸">
                    <Input />
                </Form.Item>
            </Form>
        )
    }
}
export default CreateHealthData;