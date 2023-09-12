import { getFeaturedEvents } from '../components/Helpers/API-util'
import EventList from '../components/events/event-list';

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
        featuredEvents: featuredEvents
    }
  }
};
