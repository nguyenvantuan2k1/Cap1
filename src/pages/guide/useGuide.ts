import { useRef } from 'react';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
import './index.less';
import { useLocale } from '@/locales';
import { setUserItem } from '@/stores/user.store';
import { useDispatch } from 'react-redux';

export const useGuide = () => {
  const { formatMessage } = useLocale();
  const dispatch = useDispatch();

  const driver = useRef(
    new Driver({
      keyboardControl: false,
      allowClose: false,
      overlayClickNext: true,
      // closeBtnText: formatMessage({ id: 'app.guide.driverjs.closeBtnText' }),
      // prevBtnText: formatMessage({ id: 'app.guide.driverjs.prevBtnText' }),
      // nextBtnText: formatMessage({ id: 'app.guide.driverjs.nextBtnText' }),
      // doneBtnText: formatMessage({ id: 'app.guide.driverjs.doneBtnText' }),
    }),
  );

  const driverStart = () => {
    setTimeout(() => {
      driver.current.defineSteps([
        {
          element: '#sidebar-trigger',
          popover: {
            title: 'Siderbar',
            description: 'minimize or expand the sidebar',
            position: 'bottom',
            offset: 10,
            isFirst: true,
          },
        },
        {
          element: '#notice-center',
          popover: {
            title: 'Notice',
            description: 'this is the center of the notice panel',
            position: 'bottom',
            offset: -160,
          },
        },
        {
          element: '#language-change',
          popover: {
            title: 'language-change',
            description: 'this will change the language of your application',
            position: 'bottom',
            offset: -170,
          },
        },
        {
          element: '#pageTabs .ant-tabs-nav.ant-tabs-nav-animated',
          popover: {
            title: 'setting tabs navigation',
            description: 'this will change the tabs navigation of your application',
            position: 'bottom',
            offset: 30,
          },
        },
        {
          element: '#pageTabs-actions svg',
          popover: {
            title: 'page tabs',
            description:
              'this will help you use the function below totalData to determine the total number of tabs in your application',
            position: 'left',
          },
        },
        {
          element: '#switchTheme span',
          popover: {
            title: 'change theme',
            description: 'this will changeOrigin  theme',
            position: 'left',
            isLast: true,
          },
        },
      ]);

      localStorage.setItem('newUser', 'false');
      dispatch(
        setUserItem({
          newUser: false,
        }),
      );
      driver.current.start();
      console.log('guide started');
    }, 1000);
  };

  return {
    driverStart,
  };
};

export default useGuide;
