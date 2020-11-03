import React from 'react';

import { Card, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';

interface CardObjectProps {
  dataCards: {
    billing: Billing;
    contracts: Contracts;
  };
}

interface Billing {
  monthlyBilling: number;
}

interface Contracts {
  activeContracts: number;
  overdueContracts: number;
  overdueValue: number;
  soldContracts: number;
  totalContracts: number;
  totalReceivedValue: number;
}

export default function DashboardCard(props: CardObjectProps) {
  const classes = useStyles();
  const { dataCards } = props;
  const { monthlyBilling }: Billing = dataCards.billing;
  const {
    activeContracts,
    overdueContracts,
    overdueValue,
    soldContracts,
    totalContracts,
    totalReceivedValue,
  }: Contracts = dataCards.contracts;

  return (
    <Card className={classes.cardRoot}>
      <Typography className={classes.cardTitle} variant="h5">
        Contratos do mês
      </Typography>

      <Grid className={classes.cardContainer}>
        <Grid item md={3} xs={12}>
          <Typography className={classes.titleItem} align="center" variant="h6">
            Ativos
          </Typography>

          <Typography align="left" variant="body2">
            <Typography variant="caption" className={classes.titleItem}>
              Total de contratos:{' '}
            </Typography>
            {activeContracts}
          </Typography>

          <Typography align="left" variant="body2">
            <Typography variant="caption" className={classes.titleItem}>
              Valor total:{' '}
            </Typography>

            {monthlyBilling.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Typography>
        </Grid>

        <div className={classes.divider} />

        <Grid item md={3} xs={12}>
          <Typography className={classes.titleItem} align="center" variant="h6">
            Inadimplentes
          </Typography>

          <Typography align="left" variant="body2">
            <Typography variant="caption" className={classes.titleItem}>
              Total de contratos:{' '}
            </Typography>
            {overdueContracts}
          </Typography>

          <Typography align="left" variant="body2">
            <Typography variant="caption" className={classes.titleItem}>
              Valor total:{' '}
            </Typography>

            {overdueValue.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Typography>
        </Grid>

        <div className={classes.divider} />

        <Grid item md={3} xs={12}>
          <Typography className={classes.titleItem} align="center" variant="h6">
            Novos
          </Typography>

          <Typography align="left" variant="body2">
            <Typography variant="caption" className={classes.titleItem}>
              Total de contratos:{' '}
            </Typography>
            {soldContracts}
          </Typography>

          <Typography align="left" variant="body2">
            <Typography variant="caption" className={classes.titleItem}>
              Valor total:{' '}
            </Typography>

            {totalContracts.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Typography>
        </Grid>
      </Grid>

      <Grid className={classes.itemFooter} item xs={12}>
        <Typography align="center" variant="body2">
          <Typography variant="caption" className={classes.titleItem}>
            Valor total a receber no mês:{' '}
          </Typography>

          {totalReceivedValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Typography>
      </Grid>
    </Card>
  );
}
