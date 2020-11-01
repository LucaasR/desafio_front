import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from 'services/MockedApi';

import { Container } from './styles';

export default function Home() {
  const dashboardData = useSelector(state => state);
  const dispatch = useDispatch();
  const apiUrl =
    'https://iloeirzrdmjsvklc9-mock.stoplight-proxy.io/v4/financial-dashboard';

  useEffect(() => {
    api
      .get(apiUrl)
      .then(({ data }) => data.data)
      .then(result =>
        dispatch({ type: 'LOAD_DASHBOARD_DATA', payload: result })
      );
  }, []);

  console.log(dashboardData)

  return <Container>data</Container>;
}
