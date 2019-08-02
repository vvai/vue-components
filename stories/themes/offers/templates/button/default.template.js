export const template = `
  <div class="storybook-components storybook-components--button">
    <div class="section">
      <st-offers-button :disabled="disabled"
                         :loading="loading"
                         :size="size"
                         :round="view === 'round'" 
                         :plain="view === 'plain'">Default Offers</st-offers-button>
    </div>
  </div>
`;