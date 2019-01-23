import React, {Component} from 'react';
import Img from "gatsby-image";
import { css } from 'emotion';
import { rgba, lighten } from 'polished';
import { withI18n } from '@lingui/react';

import { SECONDARY_COLOR, QUINARY_COLOR, TERTIARY_COLOR } from '../utils/vars';



const GridPics = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  margin: 0 auto;

  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  grid-auto-flow: dense;
  margin-bottom: 1.45rem;
  grid-auto-rows: minmax(300px, auto);
  @media (min-width: 560px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    // grid-auto-rows: auto;
  }

  li {
    margin: 0;
    padding: 0;
  }
`;

const columns = css`
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: auto;
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
  @media (min-width: 768px) {
    grid-column-end: span 2;
    grid-row-end: span 2;
  }
`;



const Figure = css`
  position: relative;
  height: 100%;
  width: 100%;
`;


const FigureImg = css`
  min-height: 300px;
  max-height: 300px;
  height: fit-content;
`;

const FigureImgHightlight = css`
  // height: fit-content;
  // min-height: 600px;
  // max-height: 600px;
  // @media (min-width: 768px) {
  //   min-height: calc(1200px + 0.5rem);
  //   max-height: calc(1200px + 0.5rem);
  // }
`;

const FigureImgWithoutCaption = css`
  // min-height: 600px;
  // max-height: 600px;
  // height: fit-content;
`;

const FigureImgPlaceHolder = css`
  // min-height: 300px;
  // max-height: 300px;
  height: 100%;
  width: 100%;
  background-color: ${rgba(TERTIARY_COLOR, 0.8)};
`;

const isFigureCaptionPlaceholder = css`
  color: red;
`;

const FigureCaption = css`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 2rem;
  line-height: 1;
  color: white;
  font-weight: 500;
  width: 100%;
  padding: 0.8rem;
  text-align: center;
  text-shadow: 2px 2px 4px ${QUINARY_COLOR}, 0px 0px 2px ${QUINARY_COLOR},
    1px 1px 3px ${QUINARY_COLOR};
  &.${isFigureCaptionPlaceholder} {
    bottom: 50%;
    transform: translateY(50%);
  }
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

    const { i18n, buttonText, dataList, column } = this.props;

    return(
      <section>
        <button
          onClick={this.handleExpanded}
          className={BtnSection}
          title={this.state.expanded ? i18n.t`see less` : i18n.t`see more`}
        >
          {buttonText} {this.state.expanded ? '-' : '+'}
        </button>

        {
          this.state.expanded && (
            <ul className={`${GridPics} ${column && columns}`}>
              {
                dataList.map((item, index) => (
                  <GridListItem key={index} item={item} />
                ))
              }
            </ul>
          )
        }

      </section>
    )

  }


}

const GridListItem = ({ item }) => (
  <li
    className={css`
      ${GridItem} ${item.highlight && Highlight};
    `}
  >
    <figure className={Figure}>
      {item.imageData &&
        !item.highlight && (
          <Img
            fluid={item.imageData}
            className={item.hideCaption ? FigureImgWithoutCaption : FigureImg}
          />
        )}
      {item.imageData &&
        item.highlight && (
          <Img fluid={item.imageData} className={FigureImgHightlight} />
        )}
      {!item.imageData && <div className={FigureImgPlaceHolder} />}
      {item.caption &&
        !item.hideCaption && (
        <figcaption className={`${FigureCaption} ${!item.imageData && isFigureCaptionPlaceholder }`}>{item.caption}</figcaption>
        )}
    </figure>
  </li>
);


export default withI18n()(GridList);