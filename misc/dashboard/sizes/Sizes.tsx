import { SearchOutlined } from '@ant-design/icons';
import DashboardLayout from '@components/DashboardLayout/DashboardLayout';
import { httpClient } from '@utils/httpClient';
import { Button, Col, Input, message, Popconfirm, Row, Space, Table, Typography } from 'antd';
import { useSizes } from 'hooks/api/useSizes';
import useDebounce from 'hooks/useDebounce';
import { useMemo, useState } from 'react';
import CategoryAddEdit from './components/SizesAddEdit';

const Sizes = () => {
  const [filter, setFilter] = useState('');
  const [isCategoryFormVisible, setIsCategoryFormVisible] = useState<'add' | 'edit' | false>(false);
  const [modalCategory, setModalCategory] = useState<{ sizeLabel: string } | undefined>(undefined);
  const { data, mutate } = useSizes();

  const filteredSizes = useDebounce(
    (data || []).filter(item => item.sizeLabel.toLowerCase().includes(filter.toLowerCase())),
    750,
  );

  const columns = useMemo(
    () => [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: (id: number) => id,
      },
      {
        title: 'Size',
        dataIndex: 'sizeLabel',
        key: 'sizeLabel',
        render: (sizeLabel: string) => sizeLabel,
      },
      {
        title: 'Action',
        key: 'id',
        render: (item: { id: number; sizeLabel: string }) => (
          <Space size="middle">
            <Popconfirm
              title="Sure to delete?"
              onConfirm={async () => {
                try {
                  await httpClient.delete(`api/admin/sizes/${item.id}/remove`);
                  await mutate();
                  message.success('Size has been deleted!');
                } catch (error) {
                  message.error('Something went wrong!');
                }
              }}
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ),
      },
    ],
    [],
  );
  return (
    <>
      {isCategoryFormVisible && (
        <CategoryAddEdit
          isModalVisible={!!isCategoryFormVisible}
          size={modalCategory}
          onCancel={async () => {
            setModalCategory(undefined);
            setIsCategoryFormVisible(false);
            await mutate();
          }}
        />
      )}
      <DashboardLayout>
        <Row>
          <Col span={16}>
            <Typography.Title level={3} style={{ marginBottom: 24 }}>
              Sizes
            </Typography.Title>
          </Col>
          <Col span={8} className="actionButton">
            <Button type="primary" onClick={() => setIsCategoryFormVisible('add')}>
              Add Size
            </Button>
            <Input
              size="middle"
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={e => setFilter(e.target.value)}
            />
          </Col>
        </Row>
        <Table columns={columns} dataSource={filteredSizes} />
      </DashboardLayout>
    </>
  );
};

export default Sizes;
