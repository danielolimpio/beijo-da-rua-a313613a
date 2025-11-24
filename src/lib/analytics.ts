// Google Analytics 4 event tracking utility

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Eventos personalizados para apps de namoro
export const trackAppClick = (appName: string, location: string) => {
  trackEvent('app_click', {
    app_name: appName,
    click_location: location,
  });
};

export const trackQuizStart = (quizName: string) => {
  trackEvent('quiz_start', {
    quiz_name: quizName,
  });
};

export const trackQuizComplete = (quizName: string) => {
  trackEvent('quiz_complete', {
    quiz_name: quizName,
  });
};

export const trackPageView = (pagePath: string, pageTitle: string) => {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
  });
};
