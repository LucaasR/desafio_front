import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from 'services/MockedApi';

import CardDashboard from 'components/DashboardCard';
import DashboardChart from 'components/DashboardChart';

import { CircularProgress, Grid, Typography } from '@material-ui/core';

import { Container, useStyles } from './styles';

interface DashboardReducer {
  dashboard: Dashboard;
}

interface Dashboard {
  dataCards: {
    billing: {
      monthlyBilling: number;
    };
    contracts: {
      activeContracts: number;
      overdueContracts: number;
      overdueValue: number;
      soldContracts: number;
      totalContracts: number;
      totalReceivedValue: number;
    };
  };
  dataCharts: {
    monthlyContractOverdue: {
      labels: string[];
      series: [number[]];
    };
    totalPaid: {
      labels: string[];
      series: [number[]];
    };
    totalSold: {
      labels: string[];
      series: [number[]];
    };
  };
  reference: {
    referenceMonth: string;
    referenceYear: number;
  };
}

export default function Dashboard() {
  const classes = useStyles();

  const dashboardData = useSelector(
    (state: DashboardReducer) => state.dashboard
  );

  const dispatch = useDispatch();

  const apiUrl: any = api.defaults.baseURL;

  useEffect(() => {
    api
      .get(apiUrl)
      .then(({ data }) => data.data)
      .then(result =>
        dispatch({ type: 'LOAD_DASHBOARD_DATA', payload: result })
      );
  }, []);

  const { dataCards, dataCharts }: Dashboard = dashboardData;

  return (
    <Container>
      <Grid className={classes.dashboardContainer}>
        {dataCards && (
          <Grid item xs={12}>
            <Typography variant="h6">
              {dashboardData.reference.referenceMonth}
              {' - '}
              {dashboardData.reference.referenceYear}
            </Typography>

            <Grid item xs={12}>
              <Grid className={classes.card}>
                {dataCards && <CardDashboard dataCards={dataCards} />}
              </Grid>

              <Grid item xs={12} className={classes.charts}>
                <DashboardChart
                  title="Contratos atrasados mês a mês  "
                  labels={dataCharts.monthlyContractOverdue.labels}
                  series={dataCharts.monthlyContractOverdue.series[0]}
                />
              </Grid>

              <Grid item xs={12} className={classes.charts}>
                <DashboardChart
                  title="Total a receber mês a mês"
                  labels={dataCharts.totalPaid.labels}
                  series={dataCharts.totalPaid.series[0]}
                />
              </Grid>

              <Grid item xs={12} className={classes.charts}>
                <DashboardChart
                  title="Total de valor novo vendido a receber mês a mês"
                  labels={dataCharts.totalSold.labels}
                  series={dataCharts.totalSold.series[0]}
                />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      {!dataCards && <CircularProgress className={classes.loader} />}
    </Container>
  );
}
