import React from 'react';
import { Button, Divider, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';

export default function Shield() {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <Typography align="center" variant="h3">
            Blindagem de site
          </Typography>
          <div className={classes.dividerGreen} />
        </Grid>

        <Grid item md={4} xs={12}>
          <img
            alt="security-page"
            className={classes.img}
            src="https://www.siteblindado.com/images/blindagem-site-blindado.jpg"
          />
        </Grid>
        <Grid item md={8} xs={12} style={{ marginTop: '50px' }}>
          <Typography variant="body1" className={classes.defaultText}>
            A Site Blindado oferece soluções que cobrem todo o ciclo de
            segurança para blogs, lojas virtuais, sistemas internos e sites
            institucionais. Para isso, desenvolveu produtos de acordo com as
            necessidades e peculiaridades de cada perfil de negócio.
          </Typography>
          <Typography variant="body1" className={classes.defaultText}>
            Os serviços de Blindagem de Site e Blindagem Premium possibilitam a
            utilização do Selo Site Blindado, que atesta aos clientes e usuários
            que a loja identifica e corrige as vulnerabilidades, tornando a
            experiência de compra mais segura para seus clientes. O Selo Site
            Blindado é utilizado pelas principais lojas virtuais do país.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" className={classes.defaultText}>
            Como riscos decorrentes das vulnerabilidades encontradas nos sites,
            podemos destacar: o acesso para fazer “pichação” do site, ou seja,
            inserir, por exemplo, dados de cunho religioso ou político, além,
            claro, de alteração de descrições dos produtos e seus respectivos
            preços. Em casos mais críticos, essas invasões podem fazer com que o
            site saia do ar ou ainda que sejam alteradas as configurações de
            acesso dos administradores.
          </Typography>
        </Grid>
      </Grid>

      <Grid className={classes.certificates} item xs={12}>
        <Grid container alignItems="center">
          <img
            alt="security"
            className={classes.securityImg}
            src="https://www.siteblindado.com/images/certificado-ssl.svg"
          />
          <Typography className={classes.textFocus} variant="h5">
            Blindagem de Sites
          </Typography>
        </Grid>
        <Typography variant="body1" className={classes.defaultText}>
          Oferecido de forma exclusiva pela Site Blindado, na Blindagem de Sites
          são realizadas uma série de scans automatizados de segurança, que
          identificam vulnerabilidades que ofereçam risco ao seu negócio. O
          administrador do site terá acesso, por meio do portal do cliente da
          Site Blindado, a um relatório detalhado contendo todas as
          vulnerabilidades encontradas em seu site e, além dele, uma análise
          gerencial onde é possível ter uma visão geral do estado do site.
          Quando todas as correções necessárias para proteger o site forem
          realizadas, ele ganha o direito de exibição do Selo Site Blindado, que
          atesta aos clientes e usuários que a loja identifica e corrige as
          vulnerabilidades, ou seja, que ela torna a experiência de compra mais
          segura para seus clientes.
        </Typography>
        <Divider className={classes.divider} />

        <Grid item xs={12}>
          <Typography className={classes.textFocus} variant="caption">
            Indicado para: {''}
          </Typography>
          <Typography className={classes.defaultText} variant="caption">
            E-commerces de pequeno e médio porte, além de sites institucionais.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.textFocus} variant="caption">
            O que está incluso nesse plano: {''}
          </Typography>
          <Typography className={classes.defaultText} variant="caption">
            Scan de Servidor, Scan de Aplicação Web, Scan PenTest Automatizado,
            Certificado Digital SSL (bonificado) e Scan de SSL.{' '}
          </Typography>
        </Grid>

        <Button className={classes.button} variant="outlined">
          Compar blindagem
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center">
          <img
            alt="security"
            className={classes.securityImg}
            src="https://www.siteblindado.com/images/certificado-ssl.svg"
          />
          <Typography className={classes.textFocus} variant="h5">
            Blindagem Premium
          </Typography>
        </Grid>
        <Typography variant="body1" className={classes.defaultText}>
          A Blindagem Premium é um pacote que agrupa todas as funcionalidades da
          Blindagem de Sites e mais alguns outros serviços de segurança, como a
          aplicação de um PenTest Nível 1, durante a vigência do contrato,
          formando assim uma das soluções mais completas do mercado. Essa
          modalidade de Blindagem é indicada para grandes operações de
          e-commerce, que recebem muitas visitas, o que gera mais exposição a
          ataques de pessoas mal-intencionadas. Esse perfil de negócio não pode
          correr o risco de ver sua imagem “arranhada” perante o consumidor.
          Lojas que utilizam a Blindagem Premium e que realizam as correções das
          vulnerabilidades críticas também têm o direito de exibição do selo
          Site Blindado, que é utilizado por algumas das principais lojas
          virtuais do país.
        </Typography>
        <Divider className={classes.divider} />

        <Grid item xs={12}>
          <Typography className={classes.textFocus} variant="caption">
            Indicado para: {''}
          </Typography>
          <Typography className={classes.defaultText} variant="caption">
            Grandes operações de e-commerce, aplicações com acesso a informações
            críticas, marcas consolidadas e/ou com alto número de tráfego.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.textFocus} variant="caption">
            O que está incluso nesse plano: : {''}
          </Typography>
          <Typography className={classes.defaultText} variant="caption">
            Scan de Servidor, Scan de Aplicação Web, Certificado Digital SSL EV
            (bonificado), Scan de SSL, Scan PenTest Automatizado, além de um
            Pentest nível 1.
          </Typography>
        </Grid>

        <Button className={classes.button} variant="outlined">
          Compar blindagem
        </Button>
      </Grid>
    </Grid>
  );
}
