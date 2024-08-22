import { eventParticipantApi } from "@/services/api";


function useEventParticipantHook() {
  const eventParticipantControllerFindAllPublicEvents = async ( 
    perPage: string,
    page : string,
    title?: string,
    category?: string
  ) => {
    try {
      const { data, status, statusText } =
        await eventParticipantApi.eventParticipantControllerFindAllPublicEvents(
          page,
          perPage,
          title,
          category
        );
      return {
        status: status,
        message: statusText,
        data: data,
      };
    } catch (error: any) {
      return {
        status: error.response.data.statusCode,
        message: error.response.data.message,
      };
    }
  };

  const eventParticipantControllerFindOnePublicEvent = async (slug: string) => {
    try {
      const { data, status, statusText } =
        await eventParticipantApi.eventParticipantControllerFindOnePublicEvent(
          slug
        );
      return {
        status: status,
        message: statusText,
        data: data,
      };
    } catch (error: any) {
      return {
        status: error.response.data.statusCode,
        message: error.response.data.message,
      };
    }
  };

  const eventParticipantControllerGetEventsMoreView = async () => {
    try {
      const { data, status, statusText } =
        await eventParticipantApi.eventParticipantControllerGetEventsMoreView();
      return {
        status: status,
        message: statusText,
        data: data,
      };
    } catch (error: any) {
      return {
        status: error.response.data.statusCode,
        message: error.response.data.message,
      };
    }
  };

  const eventParticipantControllerFindAllPublicEventsHome = async () => {
    try {
      const { data, status, statusText } =
        await eventParticipantApi.eventParticipantControllerFindAllPublicEventsHome();
      return {
        status: status,
        message: statusText,
        data: data,
      };
    } catch (error: any) {
      return {
        status: error.response.data.statusCode,
        message: error.response.data.message,
      };
    }
  };

  

  const eventParticipantControllerEventAddViewCount = async (
    eventSlug: string
  ) => {
    try {
      const { data, status, statusText } =
        await eventParticipantApi.eventParticipantControllerEventAddViewCount(
          eventSlug
        );
      return {
        status: status,
        message: statusText,
        data: data,
      };
    } catch (error: any) {
      return {
        status: error.response.data.statusCode,
        message: error.response.data.message,
      };
    }
  };




  return {
    eventParticipantControllerFindAllPublicEvents,
    eventParticipantControllerFindOnePublicEvent,
    eventParticipantControllerGetEventsMoreView,
    eventParticipantControllerFindAllPublicEventsHome,
    eventParticipantControllerEventAddViewCount,
  };
}
export default useEventParticipantHook;
