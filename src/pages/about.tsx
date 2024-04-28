import Layout from '@/components/Layout';
import Metadata from '@/components/Metadata';
import Link from '@/components/Link';
import styles from './Index.module.scss';

export default function About() {
    return (
        <Layout>
            <Metadata
                title="Social Bristol - About"
                description="A list of regular meetups in Bristol that are open to newcomers."
            />
            <div className={styles.hero}>
                <h1 className={styles.title}>About</h1>
                <h2>Aim</h2>
                <p>
                    This is a volunteer-led site that aims to support community
                    and friendship in Bristol. It intends to share high-quality
                    social groups that:
                </p>
                <ul>
                    <li>Are open to newcomers</li>
                    <li>Are well attended</li>
                    <li>Meet regularly</li>
                    <li>Are free or low cost</li>
                    <li>
                        Have a shared, inclusive and proactively social activity
                    </li>
                </ul>
                <p>
                    There are many social groups in Bristol that are not listed
                    on <Link url="/more-resources">major event platforms</Link>,
                    making these groups hard to find and take part in - this
                    site intends to bridge this gap by providing a free, curated
                    list of the missing groups.
                </p>

                <h2>Contribution</h2>
                <p>
                    If you know of a group that meets the above criteria, please
                    do suggest it to be added to the site. You can leave
                    suggestions and feedback on this sites{' '}
                    <Link
                        url="https://github.com/jhancock532/social-bristol/issues/new"
                        external
                    >
                        GitHub repository
                    </Link>
                    .
                </p>
                <p>
                    Pull requests and other code contributions are much
                    appreciated, contributors will be listed here in the future.
                </p>
                <p>
                    Lead developer:{' '}
                    <Link url="https://jhancock532.github.io/" external>
                        James Hancock
                    </Link>
                </p>
            </div>
        </Layout>
    );
}
