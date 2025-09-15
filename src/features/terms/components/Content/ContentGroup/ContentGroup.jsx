import styles from './ContentGroup.module.css';

/**
 * ContentGroup component.
 * @param {Object} props The props object.
 * @param {Array} props.textGroup The text group.
 */
export default function ContentGroup({ textGroup }) {
  return (
    <div>
      {textGroup.map((text, index) => (
        <p key={index} className={styles.contentText} dangerouslySetInnerHTML={{ __html: text }}></p>
      ))}
    </div>
  );
}
