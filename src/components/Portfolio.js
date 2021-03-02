import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    left: theme.spacing(20),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Avatar className={classes.avatar} alt="Remy Sharp" src={require('../static/images/1.jpg')} />
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              조현학
            </Typography>

            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              FrontEnd Developer
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="https://github.com/HyeonHak?tab=repositories">
                    <GitHubIcon fontSize="large"></GitHubIcon>
                    {'  '} Git
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href="https://blog.naver.com/zhh102000">
                    <LanguageIcon fontSize="large"></LanguageIcon>Blog
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item key={4} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={require('../static/images/project1.JPG')} title="Image title" />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    수화인식 프로그램
                  </Typography>
                  <Typography>CNN을 이용한 인공지능 졸업작품</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="https://youtu.be/izKCOyBcSOE" target="_blank">
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    href="https://drive.google.com/file/d/159bVqDbdbW0awtz8zHkKbiO4WIf-RXj8/view?usp=sharing"
                    target="_blank"
                  >
                    보고서
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={4} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={require('../static/images/project2.JPG')} title="Image title" />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    숨좀쉬자
                  </Typography>
                  <Typography>소프트웨어 마에스트로 10기 {<br />}개발 프로젝트</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://drive.google.com/drive/folders/1TeS78EQn9CpkYoa4jV1bIKPh1A87ykNX?usp=sharing"
                    target="_blank"
                  >
                    Preview
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    href="https://drive.google.com/file/d/17RvCFCvVzR372y7i2vPBZyQfESNNEg2M/view?usp=sharing"
                    target="_blank"
                  >
                    보고서
                  </Button>
                  <Button size="small" color="primary" href="https://github.com/HyeonHak/SoftwareMaestro_Controler" target="_blank">
                    Git
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={4} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={require('../static/images/project3.JPG')} title="Image title" />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    투명펀딩
                  </Typography>
                  <Typography>핀테크 아카데미 개발 프로젝트</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://drive.google.com/file/d/1rU0Uc_PL4wCqeuFaK_z2baT3QH2jKJWt/view?usp=sharing"
                    target="_blank"
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    href="https://drive.google.com/file/d/1JE3XPw_4TkTQk6k_tIfcld3YGvDI8rPC/view?usp=sharing"
                    target="_blank"
                  >
                    보고서
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/transparent-funding-kisa/transparent-funding"
                    target="_blank"
                  >
                    Git
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={4} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={require('../static/images/project4.png')} title="Image title" />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    hakFlix
                  </Typography>
                  <Typography>팝콘 타임 클론 프로젝트</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="https://github.com/HyeonHak/hakFlix" target="_blank">
                    Git
                  </Button>
                  <Button size="small" color="primary" href="https://hyeonhak.github.io/hakFlix/" target="_blank">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={4} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={require('../static/images/project5.png')} title="Image title" />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Emoticbox
                  </Typography>
                  <Typography>Emoticbox 앱</Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          About
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          1994년 1월 26일 출생 {<br />} 서경대학교 컴퓨터 공학과 졸업 - 학점 : 3.59 / 4.5 (2019)
          {<br />}
          SoC기반 AI 딥러닝 Firmware 설계 교육 (2019){<br />}
          KSB인공지능 프레임워크 활용 공모전 우수상 (2019){<br />}
          삼성SDS 알고리즘 특강 수료 (2019) {<br />}
          마에스트로 10기 수료 (2019){<br />}
          핀테크 아카데미 수료 (2020){<br />}
          42 seoul 1기 과정 (2020) 이모틱박스 재직중 (2020.09 ~ 현재)
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
