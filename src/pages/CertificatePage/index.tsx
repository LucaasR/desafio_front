import React from 'react';
import { Button, Divider, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';

export default function Certificate() {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <Typography align="center" variant="h3">
            Certificados
          </Typography>
          <div className={classes.dividerGreen} />
        </Grid>

        <Grid item md={4} xs={12}>
          <img
            alt="ssl-page"
            className={classes.img}
            src="https://www.siteblindado.com/images/certificados-ssl-secure-socket.jpg"
          />
        </Grid>
        <Grid item md={8} xs={12}>
          <Typography variant="body1" className={classes.defaultText}>
            O Certificado Digital SSL Blindado é o 1º nível de segurança para
            todo e qualquer site que realize a transmissão de dados, o que
            ocorre, por exemplo, com e-commerces que solicitam informações
            sensíveis aos clientes, como e-mail e dados bancários. Esse
            certificado pode ser identificado pelo cadeado verde na barra de
            navegação, que atesta que o site protege as informações que são
            enviadas pelos usuários ou clientes, como número de cartão de
            crédito, por exemplo. O Certificado Digital SSL age da seguinte
            forma: assim que o cliente aperta o botão comprar no carrinho de
            compras do e-commerce, ele embaralha esses dados, que só poderão ser
            interpretados pelo servidor da loja virtual. Com isso, caso alguma
            pessoa mal-intencionada consiga interceptar esses dados, mesmo assim
            ela não conseguirá fazer a interpretação deles e ter acesso às
            informações dos clientes.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" className={classes.defaultText}>
            Todos os clientes da Site Blindado podem contar com o Scan SSL. Esse
            serviço, oferecido de forma exclusiva pela Site Blindado, faz uma
            análise que identifica se o certificado foi instalado seguindo todas
            as recomendações para o bom uso do SSL.
          </Typography>
          <Typography variant="body1" className={classes.defaultText}>
            Existem diferentes modalidades de SSL, cada um deles destinado a um
            determinado fim:
          </Typography>
        </Grid>
      </Grid>

      <Grid className={classes.certificates} item xs={12}>
        <Grid container alignItems="center">
          <img
            alt="ssl-page"
            className={classes.securityImg}
            src="https://www.siteblindado.com/images/certificado-ssl.svg"
          />
          <Typography className={classes.textFocus} variant="h5">
            SSL Blindado - Basic
          </Typography>
        </Grid>
        <Typography variant="body1" className={classes.defaultText}>
          O SSL Site Blindado Basic protege as informações inseridas pelos
          clientes em suas aplicações web. O diferencial da Site Blindado é
          oferecer um serviço único de pós-venda, onde todas as etapas de
          validação do certificado são realizadas com o acompanhamento da
          empresa. Além disso, o cliente que utiliza o SSL Blindado tem a
          possibilidade de exibir o selo do SSL Blindado em seu site aumentando
          mais ainda a percepção de segurança para o seu cliente final.
        </Typography>
        <Divider className={classes.divider} />

        <Grid item xs={12}>
          <Typography className={classes.textFocus} variant="caption">
            Indicado para: {''}
          </Typography>
          <Typography className={classes.defaultText} variant="caption">
            E-commerces de todos os tamanhos que desejam (e precisam) proteger
            as informações de seus usuários.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.textFocus} variant="caption">
            Opções de validade: {''}
          </Typography>
          <Typography className={classes.defaultText} variant="caption">
            1 ano.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.textFocus} variant="caption">
            Chaves com tamanho a partir de 2048 bits.
          </Typography>
        </Grid>
        <Button className={classes.button} variant="outlined">
          Compar certificado
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center">
          <img
            alt="ssl-page"
            className={classes.securityImg}
            src="https://www.siteblindado.com/images/certificado-ssl.svg"
          />
          <Typography className={classes.textFocus} variant="h5">
            SSL Blindado EV
          </Typography>
        </Grid>
        <Typography variant="body1" className={classes.defaultText}>
          O SSL Blindado EV (Extended Validation SSL, ou SSL de Validação
          Extendida) é uma modalidade SSL mais avançada. Antes de sua emissão é
          realizada uma verificação mais ampla de segurança, o que propicia que
          o site exiba um indicador visual: a barra de endereço do navegador
          fica verde e apresenta a razão social da empresa, gerando uma
          percepção muito maior de segurança aos visitantes. Para isso, a
          empresa precisa confirmar seu registro junto à Receita Federal por
          meio de seu cnpj. Além disso, é feita uma validação externa, pelo
          telefone, onde o representante técnico da empresa é acionado.
        </Typography>
        <Divider className={classes.divider} />

        <Grid item xs={12}>
          <Typography className={classes.textFocus} variant="caption">
            Indicado para: {''}
          </Typography>
          <Typography className={classes.defaultText} variant="caption">
            diferentes perfis de negócios que querem gerar valor para suas
            marcas por meio da exibição de elementos avançados de segurança,
            como lojas virtuais, corretoras, financeiras e internet banking.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.textFocus} variant="caption">
            Opções de validade: {''}
          </Typography>
          <Typography className={classes.defaultText} variant="caption">
            1 ano.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.textFocus} variant="caption">
            Chaves com tamanho a partir de 2048 bits.
          </Typography>
        </Grid>
        <Button className={classes.button} variant="outlined">
          Compar certificado
        </Button>
      </Grid>
    </Grid>
  );
}
