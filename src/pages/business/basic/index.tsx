import { Space, Tag, Button } from 'antd';
import { getBusinessUserList } from '@/api/business';
import MyButton from '@/components/basic/button';
import MyPage, { MyPageTableOptions } from '@/components/business/page';
import { BuniesssUser } from '@/interface/business';
import { FC } from 'react';
import { supabase } from './../../../config/supabase';

const tableColums: MyPageTableOptions<BuniesssUser> = [
  {
    title: 'Name',
    children: [
      { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
      { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
    ],
  },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    render: (tags, record) => (
      <>
        {record.tags.map(tag => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <MyButton type="text">Invite {record.lastName}</MyButton>
        <MyButton type="text">Delete</MyButton>
      </Space>
    ),
  },
];

const BusinessBasicPage: FC = () => {
  return (
    <>
      <div style={{ padding: '100px' }}>
        <Button
          onClick={async e => {
            const { data, error } = await supabase.auth.updateUser({ role: 'admin' });

            console.log('🚀 ~ file: index.tsx ~ line 51 ~ error', error);
          }}
        >
          dfghjkl
        </Button>
      </div>
    </>
  );
};

export default BusinessBasicPage;
