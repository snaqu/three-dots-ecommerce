import DashboardLayout from "@components/DashboardLayout/DashboardLayout";
import { ArrowDownOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Typography,
  Table,
  Tag,
  Space,
  Popconfirm,
  Button,
  Row,
  Col,
  Statistic,
  message,
  Input,
} from "antd";
import React, { useState } from "react";
import NumberFormat from "react-number-format";
import classes from "./Products.module.scss";
import { useStore } from "store";
import useDebounce from "hooks/useDebounce";
import ProductView from "./components/ProductView";
import { Product } from "mock/products";

const ProductsPage = () => {
  const [modalProduct, setModalProduct] = useState<Product | undefined>(
    undefined
  );
  const [isProductModalViewVisible, setIsProductModalViewVisible] =
    useState(false);
  const [filter, setFilter] = useState("");
  const products = useStore((state) => state.products);
  const removeProduct = useStore((state) => state.removeProduct);

  const filteredProducts = useDebounce(
    products.filter((item) => item.name.includes(filter)),
    750
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => text,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: string) => (
        <NumberFormat
          value={price}
          displayType="text"
          thousandSeparator
          prefix="$"
        />
      ),
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
      render: (discount: number) => (
        <Statistic
          value={discount > 0 ? discount : "-"}
          precision={2}
          valueStyle={{ color: discount > 0 ? "#3f8600" : "" }}
          prefix={discount > 0 ? <ArrowDownOutlined /> : null}
          suffix={discount > 0 ? "%" : undefined}
          className={classes.statistics}
        />
      ),
    },
    {
      title: "Properties",
      key: "properties",
      dataIndex: "properties",
      render: (properties: string[]) => (
        <>
          {properties.map((tag: any) => (
            <Tag color="green" key={tag}>
              {tag.toUpperCase()}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Collections",
      key: "collections",
      dataIndex: "collections",
      render: (collections: string[]) => (
        <>
          {collections.map((tag: any) => (
            <Tag color="geekblue" key={tag}>
              {tag.toUpperCase()}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (item: any) => (
        <Space size="middle">
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => {
              removeProduct(item.key);
              message.success("Product has been deleted!");
            }}
          >
            <a>Delete</a>
          </Popconfirm>
          <a>Edit</a>
          <a
            onClick={() => {
              setModalProduct(item);
              setIsProductModalViewVisible(true);
            }}
          >
            View
          </a>
        </Space>
      ),
    },
  ];

  return (
    <>
      {modalProduct && (
        <ProductView
          isModalVisible={isProductModalViewVisible}
          product={modalProduct}
          onCancel={() => setIsProductModalViewVisible(false)}
        />
      )}
      <DashboardLayout>
        <Row>
          <Col span={16}>
            <Typography.Title level={3} style={{ marginBottom: 24 }}>
              Products
            </Typography.Title>
          </Col>
          <Col span={8} className={classes.actionButton}>
            <Button type="primary">Add product</Button>
            <Input
              size="middle"
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={(e) => setFilter(e.target.value)}
            />
          </Col>
        </Row>
        <Table columns={columns} dataSource={filteredProducts} />
      </DashboardLayout>
    </>
  );
};

export default ProductsPage;
