import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.githubContainer}>
				<a
					target="_blank"
					className={styles.github}
					href="https://github.com/Magrid0/minime"
				>
					<FontAwesomeIcon className={styles.icon} icon={faGithub} />
					Github Page
				</a>
			</p>
		</footer>
	);
};

export default Footer;
