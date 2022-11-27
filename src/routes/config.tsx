import { FC, ReactElement, useEffect, useState } from 'react';
import { RouteProps, Navigate, useLocation } from 'react-router';
import { useIntl } from 'react-intl';
import { useAuth } from '../context/AuthContext';

export interface WrapperRouteProps extends RouteProps {
  /** document title locale id */
  titleId: string;
}

const WrapperRouteComponent: FC<WrapperRouteProps> = ({ titleId, ...props }) => {
  const { formatMessage } = useIntl();
  const { loading, currentUser } = useAuth();

  const { pathname } = useLocation();

  if (titleId) {
    document.title = formatMessage({
      id: titleId,
    });
  }

  // isLoggedIn = false ===> /login
  // isLoggedIn = true   ==> /home
  // isAdmin && isLoggedIn => vào đc /admin/....

  const isAdmin = false;

  // console.log(currentUser);

  if (loading) {
    return <> loading Server please wait a minute </>;
  }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const isRoleAdmin = pathname.split('/')[1] === 'admin';

  if (isAdmin) {
    return !isRoleAdmin ? <Navigate to="/admin/" /> : (props.element as ReactElement);
  }

  if (isRoleAdmin) {
    return <Navigate to="/" />;
  }

  return props.element as ReactElement;
};

export default WrapperRouteComponent;
