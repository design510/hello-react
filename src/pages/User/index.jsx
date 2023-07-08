import React, { Component } from "react";

import { Space, Table, Tag, Button } from "antd";
// import PropTypes from "prop-types";

export class User extends Component {
  static propTypes = {};

  state = { dataSource: [], columns: [] };

  componentDidMount() {
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
        render: (text) => (
          <a
            href={`https://www.baidu.com/?keyword=${text}`}
            target="_blank"
            rel="noreferrer"
          >
            {text}
          </a>
        ),
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age",
        render: (_, { address }) => {
          let ageTip = () => {
            if (_ > 40) {
              return (
                <span>
                  {" "}
                  年龄大于{_}，住址在{address}
                </span>
              );
            }
          };

          return (
            <>
              <span>{_}</span>
              {ageTip()}
            </>
          );
        },
      },
      {
        title: "兴趣爱好",
        dataIndex: "interest",
        key: "interest",
        render: (text) => (
          <>
            {text.map((item) => {
              return <Tag key={item}>{item}</Tag>;
            })}
          </>
        ),
      },
      {
        title: "住址",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "操作",
        key: "Action",
        render: (_, record) => (
          <Space size="middle">
            <Button type="link">编辑</Button>
            <Button type="text" danger>删除</Button>
          </Space>
        ),
      },
    ];
    const dataSource = [
      {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号",
        interest: ["看书", "逛街", "打豆豆"],
      },
      {
        key: "2",
        name: "胡彦祖222",
        age: 42,
        address: "西湖区湖底公园2号",
        interest: ["旅游", "还是旅游", "睡懒觉"],
      },
    ];
    this.setState({ dataSource, columns });
  }

  render() {
    const { dataSource, columns } = this.state;
    return (
      <div>
        <Table dataSource={dataSource} columns={columns} bordered></Table>
      </div>
    );
  }
}

export default User;
