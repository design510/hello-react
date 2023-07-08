import React, { useState } from "react";
import { Table, Input, Form } from "antd";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "input" ? <Input /> : null;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please enter ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
];

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(dataSource);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
      console.log(newData)
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      editable: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      editable: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      editable: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => {
        const editable = isEditing(record);

        return editable ? (
          <span>
            <a href="###" onClick={() => save(record.key)}>
              保存
            </a>
            <a href="###" onClick={cancel} style={{marginLeft: '12px'}}>
              取消
            </a>
          </span>
        ) : (
          <a
            href="###"
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            编辑
          </a>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: "input",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
      />
    </Form>
  );
};

export default EditableTable;
