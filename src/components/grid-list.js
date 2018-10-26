import React, {Component} from 'react';
import { Link } from 'gatsby';
import Img from "gatsby-image";
import { css } from 'emotion';
import { rgba, lighten } from 'polished';
import { StatefulToolTip } from "react-portal-tooltip"

import { PISC, PISC_TOWER, LocationMarket } from '../utils/svg';

import { SECONDARY_COLOR, PRIMARY_COLOR, SNOW_COLOR, TERTIARY_COLOR, QUINARY_COLOR, DARK, SANS_SERIF_FONTS } from '../utils/vars';



const GridPics = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  margin: 0 auto;

  grid-column-gap: .45rem;
  grid-row-gap: .45rem;
  grid-auto-flow: dense;
  margin-bottom: 1.45rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: minmax(300px, auto);
  }

  li {
    margin: 0;
    padding: 0;
  }
`;

const BtnSection = css`
  display: block;
  font-size: 1.8rem;
  border: 0;
  background-color: transparent;
  color: ${SECONDARY_COLOR};
  margin: 0 auto 1rem;
  padding: .45rem .8rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: .300s ease-in;
  border-radius: 4px;
  border: 1px solid transparent;

  &:hover {
    color: ${lighten(.1, SECONDARY_COLOR)};
    border-color: ${lighten(.1, SECONDARY_COLOR)};
  }
  &:active {
    color: white;
    background-color: ${lighten(.1, SECONDARY_COLOR)};
    border-color: ${lighten(.1, SECONDARY_COLOR)};
  }
  &:focus {
    outline-color: ${lighten(.1, SECONDARY_COLOR)};
  }

`;

const GridItem = css`

`;


const Highlight = css`
  grid-column-end: span 2;
`;



const Figure = css`
  position: relative;
`;


const FigureImg = css`
  min-height: 300px;
  max-height: 300px;
  height: fit-content;
  @media (min-width: 1024px) {
    // max-height: 250px;
  }
`;

const FigureCaption = css`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 2rem;
  line-height: .8;
  color: white;
  font-weight: 500;
  width: 100%;
  padding: .8rem;
  text-align: center;
  // background-color: ${rgba(QUINARY_COLOR, .6)};
  text-shadow: 2px 2px 4px ${QUINARY_COLOR}, 0px 0px 2px ${QUINARY_COLOR}, 1px 1px 3px ${QUINARY_COLOR};
`;


class GridList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: props.expanded || false,
    };
  }

  handleExpanded = (e) => {
    e.stopPropagation();
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render() {

    const { buttonText, dataList } = this.props;

    return(
      <section>
        <button
          onClick={this.handleExpanded}
          className={BtnSection}>
          {buttonText}
        </button>

        {
          this.state.expanded && (
            <ul className={GridPics}>

              {
                dataList.map((item, index) => (
                  <GridListItem key={index} item={item} />
                ))
              }

              {/* <li style={{ maxHeight: 300 }}>
                <figure>
                  <Img fluid={data.imageRodrigoBersy.childImageSharp.fluid} />
                  <figcaption>
                    Rodrigo & berci
                  </figcaption>
                </figure>
              </li> */}
            </ul>
          )
        }

      </section>
    )

  }


}

const GridListItem = ({item}) => (
  <li className={css`${GridItem} ${item.highlight && Highlight}`}>
    <figure className={Figure}>
      {
        item.imageData && (
          <Img fluid={item.imageData} className={FigureImg} />
        )
      }

      {
        item.caption && (
          <figcaption className={FigureCaption}>
            {item.caption}
          </figcaption>
        )
      }

    </figure>
  </li>

);


export default GridList;