import { Col, Row } from '@/components/HTML';
import clsx from 'clsx';

const TitleDescriptionLarge = ({
  title,
  description,
  titleClass,
  subTitleClass,
  stylesTitle,
  stylesSubTitle,
  isXSmall
}) => {

  return (
    <div className="d-flex flex-column align-items-start">
      <h2
        className={titleClass}
        style={{
          ...stylesTitle,
          ...isXSmall && { marginBottom: '0' }
        }}
      >
        {title}
      </h2>
      {!isXSmall && (
        <div
          className={subTitleClass}
          {...stylesSubTitle && { style: stylesSubTitle }}
        >
          {description}
        </div>
      )}
    </div>
  )
}

export default TitleDescriptionLarge
