import { ArrowDownOutlined } from '@ant-design/icons';
import { Descriptions, Statistic, Tag } from 'antd';
import { useCategories } from 'hooks/api/useCategories';
import { useProduct } from 'hooks/api/useProduct';
import { useRouter } from 'next/router';
import React from 'react';
import NumberFormat from 'react-number-format';
import classes from '../Products.module.scss';

const ProductDetails = () => {
  const router = useRouter();
  const { data } = useProduct(Number(router.query.id));
  const { data: categories } = useCategories();

  if (!data) {
    return null;
  }

  return (
    <Descriptions bordered>
      <Descriptions.Item label="Id" span={3}>
        {data?.productId}
      </Descriptions.Item>
      <Descriptions.Item label="Name" span={3}>
        {data?.name}
      </Descriptions.Item>
      <Descriptions.Item label="Description" span={3}>
        {data?.description}
      </Descriptions.Item>
      <Descriptions.Item label="Base price">
        <NumberFormat value={data?.price} displayType="text" thousandSeparator prefix="$" />
      </Descriptions.Item>
      <Descriptions.Item label="Discount">
        <Statistic
          value={data?.discount > 0 ? data?.discount : '-'}
          precision={2}
          valueStyle={{ color: data?.discount > 0 ? '#3f8600' : '' }}
          prefix={data?.discount > 0 ? <ArrowDownOutlined /> : null}
          suffix={data?.discount > 0 ? '$' : undefined}
          className={classes.statistics}
        />
      </Descriptions.Item>
      <Descriptions.Item label="Final price">
        <NumberFormat value={data?.price - data.discount} displayType="text" thousandSeparator prefix="$" />
      </Descriptions.Item>
      <Descriptions.Item label="Collection" span={3}>
        <Tag color="geekblue">{categories?.find(item => item.id === data.categoryId)?.name.toUpperCase()}</Tag>
      </Descriptions.Item>
    </Descriptions>
  );
};

export default ProductDetails;
