import "./About.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ava from "../../assets/ava.JPG";
import AttachmentIcon from "@mui/icons-material/Attachment";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export default function About() {
  return (
    <div className="About">
      <Box sx={{ width: "100%" ,padding: 0, margin: 0}} className="box-resume">
        <div className="my-resume">
          <div>
            <img src={ava} alt="" width={"30%"} />
            <Typography variant="h4" gutterBottom>
              Kozachenko Volodymyr
            </Typography>
            <Typography variant="h5" gutterBottom style={{color: '#0044d6'}}>
              Tech
            </Typography>
            <div className="icon-describe">
              <AttachmentIcon />
              <h6>Js</h6>
              <ArrowRightAltIcon />
              <h6>90%</h6>
            </div>
            <div className="icon-describe">
              <AttachmentIcon />
              <h6>HTML</h6>
              <ArrowRightAltIcon />
              <h6>90%</h6>
            </div>
            <div className="icon-describe">
              <AttachmentIcon />
              <h6>CSS</h6>
              <ArrowRightAltIcon />
              <h6>90%</h6>
            </div>
            <div className="icon-describe">
              <AttachmentIcon />
              <h6>React</h6>
              <ArrowRightAltIcon />
              <h6>75%</h6>
            </div>
          </div>
          <div className="describe-section">
            <Typography variant="h6" gutterBottom>
              Biography
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
              className="typography"
            >
              I strive for stability in both work and life. It is important for
              me to have confidence in the future, the ability to plan ahead,
              and opportunities for growth. I want to do what I
              love—programming—and work in a great company with good people. I
              also dream of having a family where there is comfort and support.
              Feeling comfortable in an environment where hard work and
              responsibility are valued is essential for me.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Needs
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
              className="typography"
            >
              I strive for stability in both work and life. It is important for
              me to have confidence in the future, the ability to plan ahead,
              and opportunities for growth. I want to do what I
              love—programming—and work in a great company with good people. I
              also dream of having a family where there is comfort and support.
              Feeling comfortable in an environment where hard work and
              responsibility are valued is essential for me.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Pain points
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
              className="typography"
            >
              I find it difficult to tolerate other people's mistakes, but I am
              aware of this and try to work on myself. I feel comfortable
              working in a team, but if someone is unwilling to do their part, I
              struggle to motivate them. Sometimes, I lack patience, but I
              understand that compromise is essential in both life and work.
              Stability, trust, and the right environment are what truly matter
              to me.
            </Typography>
          </div>
        </div>
      </Box>
    </div>
  );
}
