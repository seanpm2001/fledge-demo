/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const ONE_WEEK_IN_SECONDS = 60 * 60 * 24 * 7;

const joinInterestGroup = async (dspUrl) => {
  const interestGroup = {
    owner: `${dspUrl}`,
    name: 'tv',
    biddingLogicUrl: `${dspUrl}/bid.js`,
    ads: [
      {
        renderUrl: `${dspUrl}/ads/default-ad.html`,
        metadata: {
          adId: 1234,
          adName: 'default-ad',
        },
      },
    ],
  };

  navigator.joinAdInterestGroup(interestGroup, ONE_WEEK_IN_SECONDS);
};
