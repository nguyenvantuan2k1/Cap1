import { FC } from 'react';
import { Typography } from 'antd';
import { LocaleFormatter } from '@/locales';

const { Title, Paragraph } = Typography;

const div = <div style={{ height: 200 }}>2333</div>;
const div1 = <div style={{ height: 200 }}>2333</div>;
const div2 = <div style={{ height: 200 }}>2333</div>;
const div3 = <div style={{ height: 200 }}>2333</div>;
const div4 = <div style={{ height: 200 }}>2333</div>;
const div5 = <div style={{ height: 200 }}>2333</div>;

const DocumentationPage: FC = () => {
  return (
    <div>
      <Typography className="innerText">
        <Title>
          <LocaleFormatter id="app.documentation.introduction.title" />
        </Title>
        <Paragraph>
          <LocaleFormatter id="app.documentation.introduction.description" />
        </Paragraph>
        <Title>
          <LocaleFormatter id="app.documentation.catalogue.title" />
        </Title>
        <Paragraph>
          <LocaleFormatter id="app.documentation.catalogue.description1" />
        </Paragraph>
        <Paragraph>
          <ul>
            <li>
              <a href="#layout">
                <LocaleFormatter id="app.documentation.catalogue.list.layout1" />
              </a>
            </li>
            <li>
              <a href="#routes">
                <LocaleFormatter id="app.documentation.catalogue.list.routes1" />
              </a>
            </li>
            <li>
              <a href="#request">
                <LocaleFormatter id="app.documentation.catalogue.list.request1" />
              </a>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <LocaleFormatter id="app.documentation.catalogue.description2" />
        </Paragraph>
        <Paragraph>
          <ul>
            <li>
              <a href="#layout">
                <LocaleFormatter id="app.documentation.catalogue.list.layout2" />
              </a>
            </li>
            <li>
              <a href="#routes">
                <LocaleFormatter id="app.documentation.catalogue.list.routes2" />
              </a>
            </li>
            <li>
              <a href="#request">
                <LocaleFormatter id="app.documentation.catalogue.list.request2" />
              </a>
            </li>
          </ul>
        </Paragraph>
        {/* <Title id="layout" level={2}>
          <LocaleFormatter id="app.documentation.catalogue.list.layout1" />
        </Title>
        <Paragraph>{div}</Paragraph>
        <Title id="routes" level={2}>
          <LocaleFormatter id="app.documentation.catalogue.list.routes1" />
        </Title>
        <Paragraph>{div}</Paragraph>
        <Title id="request" level={2}>
          <LocaleFormatter id="app.documentation.catalogue.list.request1" />
        </Title>
        <Paragraph>{div}</Paragraph> */}
      </Typography>
    </div>
  );
};

export default DocumentationPage;
