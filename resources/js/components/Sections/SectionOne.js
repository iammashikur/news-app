import React, { Component } from 'react';
import LeadFirst from './Parts/LeadFirst';
import LeadOthers from './Parts/LeadOthers';
import SubLead from './Parts/SubLead';
import Latest from './Parts/Latest';
import LatestByCat from './Parts/LatestByCat';

class SectionOne extends Component {

render(){

    return(
        <div className="container">
        <div className="row" style={{height: 'auto !important'}}>
        <div className="col-xl-9 col-12 line-right mt-4">
          <div className="row">
            <div className="col-md-8 line-right">
              <LeadFirst skip={0} take={1}/>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
            <LeadOthers skip={1} take={1} />
            </div>
            <div className="col-md-12">
              <div className="line-bottom mt-4 mb-4">
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 line-right">
            <LeadOthers skip={2} take={1} />
            </div>
            <div className="col-md-4 line-right mt-4 mt-md-0">
            <LeadOthers skip={3} take={1} />
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
            <LeadOthers skip={4} take={1} />
            </div>
            <div className="col-md-12">
              <div className="line-bottom mt-4 mb-4">
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="row">
              <SubLead skip={0} take={3} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
              <SubLead skip={3} take={3} />
               </div>
            </div>
          </div>
        </div>


        <div className="col-md-3 mt-4">
          <div className="latest-popular">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link show active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">সর্বশেষ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">সিলেটের সর্বশেষ</a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane show active" id="tabs-1" role="tabpanel">
                <div className="bg-light" style={{maxHeight: '450px', overflowY: 'scroll'}}>

                <Latest skip={0} take={20} />

                </div>
              </div>
              <div className="tab-pane" id="tabs-2" role="tabpanel">
                <div className="bg-light" style={{maxHeight: '450px', overflowY: 'scroll'}}>
                <LatestByCat cat={1} skip={0} take={20} />
                  <a href="https://deshdorpon.com/%e0%a6%9c%e0%a6%bf%e0%a6%a8%e0%a7%8d%e0%a6%a6%e0%a6%be%e0%a6%ac%e0%a6%be%e0%a6%9c%e0%a6%be%e0%a6%b0%e0%a6%b8%e0%a6%b9-%e0%a6%af%e0%a7%87%e0%a6%b8%e0%a6%ac-%e0%a6%8f%e0%a6%b2%e0%a6%be%e0%a6%95%e0%a6%be/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> জিন্দাবাজারসহ যেসব এলাকায় আজ বিদ্যুৎ থাকবে না</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%9b%e0%a6%be%e0%a6%a4%e0%a7%8d%e0%a6%b0%e0%a6%a6%e0%a6%b2-%e0%a6%a8%e0%a7%87%e0%a6%a4%e0%a6%be-%e0%a6%b0%e0%a6%be%e0%a6%9c%e0%a7%81-%e0%a6%b9%e0%a6%a4%e0%a7%8d%e0%a6%af%e0%a6%be-%e0%a6%ae/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> ছাত্রদল নেতা রাজু হত্যা মামলার চার্জ গঠন পেছালো</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%ac%e0%a6%bf%e0%a7%9f%e0%a6%be%e0%a6%a8%e0%a7%80%e0%a6%ac%e0%a6%be%e0%a6%9c%e0%a6%be%e0%a6%b0%e0%a7%87-%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%80%e0%a6%b0-%e0%a6%a6%e0%a6%97%e0%a7%8d%e0%a6%a7/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> বিয়ানীবাজারে ‘নারীর’ দগ্ধ লাশ উদ্ধার</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%9a%e0%a6%b2%e0%a7%87-%e0%a6%97%e0%a7%87%e0%a6%b2%e0%a7%87%e0%a6%a8-%e0%a6%b2%e0%a7%9c%e0%a6%be%e0%a6%95%e0%a7%81-%e0%a6%af%e0%a7%81%e0%a6%a6%e0%a7%8d%e0%a6%a7%e0%a6%be-%e0%a6%a8%e0%a6%bf/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> চলে গেলেন লড়াকু যোদ্ধা নিজামউদ্দিন লস্কর</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b2%e0%a6%a8%e0%a7%8d%e0%a6%a1%e0%a6%a8-%e0%a6%a5%e0%a7%87%e0%a6%95%e0%a7%87-%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f-%e0%a6%86%e0%a6%b8%e0%a6%b2%e0%a7%87%e0%a6%a8-%e0%a6%86%e0%a6%b0/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> লন্ডনের করোনা পরিস্থিতিতে সিলেট এলেন আরও ৪৩ যাত্রী</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f-%e0%a6%ae%e0%a6%b9%e0%a6%be%e0%a6%a8%e0%a6%97%e0%a6%b0-%e0%a6%93-%e0%a6%9c%e0%a7%87%e0%a6%b2%e0%a6%be-%e0%a6%86%e0%a6%93%e0%a7%9f%e0%a6%be%e0%a6%ae/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> সিলেট মহানগর ও জেলা আওয়ামী লীগের পূর্ণাঙ্গ কমিটি ঘোষণা (তালিকাসহ)</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%97%e0%a7%8b%e0%a6%b2%e0%a6%be%e0%a6%aa%e0%a6%97%e0%a6%9e%e0%a7%8d%e0%a6%9c%e0%a7%87-%e0%a6%9f%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%95-%e0%a6%ae%e0%a6%be%e0%a6%87%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a7%8b/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> গোলাপগঞ্জে ট্রাক-মাইক্রোবাস সংঘর্ষে সিলিন্ডার বিষ্ফোরণ, নিহত ৪</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/29945-2/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> চলন্ত বাসে ধর্ষণচেষ্টা, চালকের সহকারী গ্রেপ্তার</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%95%e0%a6%b0%e0%a7%8b%e0%a6%a8%e0%a6%be%e0%a6%b0-%e0%a6%a8%e0%a6%a4%e0%a7%81%e0%a6%a8-%e0%a6%9d%e0%a7%81%e0%a6%81%e0%a6%95%e0%a6%bf%e0%a6%b0-%e0%a6%ae%e0%a6%a7%e0%a7%8d%e0%a6%af%e0%a7%87/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> করোনার নতুন&nbsp; ঝুঁকির মধ্যে লন্ডন থেকে সিলেট এলেন ১৬৫ যাত্রী</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%aa%e0%a6%a5%e0%a6%9a%e0%a6%be%e0%a6%b0%e0%a7%80%e0%a6%a6%e0%a7%87%e0%a6%b0-%e0%a6%a6%e0%a6%96%e0%a6%b2%e0%a7%87-%e0%a6%b8%e0%a6%bf%e0%a6%8f%e0%a6%a8%e0%a6%9c%e0%a6%bf-%e0%a6%85%e0%a6%9f/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> পথচারীদের দখলে সিএনজি অটোরিকশাবিহীন সিলেট</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%ae%e0%a6%be%e0%a6%ae%e0%a7%81%e0%a6%a8%e0%a7%81%e0%a6%b2-%e0%a6%b9%e0%a6%95%e0%a7%87%e0%a6%b0-%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f-%e0%a6%b8%e0%a6%ab%e0%a6%b0-%e0%a6%a8%e0%a6%bf/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> মামুনুল হকের সিলেট সফর নিয়ে উত্তেজনা</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f-%e0%a6%ac%e0%a6%bf%e0%a6%ad%e0%a6%be%e0%a6%97%e0%a7%87%e0%a6%b0-%e0%a7%ad-%e0%a6%aa%e0%a7%8c%e0%a6%b0%e0%a6%b8%e0%a6%ad%e0%a6%be%e0%a7%9f-%e0%a6%86/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> সিলেট বিভাগের ৭ পৌরসভায় আওয়ামী লীগের মেয়রপ্রার্থী যারা</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a7%87%e0%a6%87-%e0%a6%8f%e0%a6%b8%e0%a6%86%e0%a6%87-%e0%a6%86%e0%a6%95%e0%a6%ac%e0%a6%b0%e0%a7%87%e0%a6%b0-%e0%a6%aa%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a7%87-%e0%a6%b2%e0%a7%9c%e0%a6%ac/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> সেই এসআই আকবরের পক্ষে লড়বেন যে আইনজীবী</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b6%e0%a6%bf%e0%a6%b6%e0%a7%81-%e0%a6%a4%e0%a6%be%e0%a6%b2%e0%a6%b9%e0%a6%be%e0%a6%95%e0%a7%87-%e0%a6%b9%e0%a6%a4%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b0-%e0%a6%9b%e0%a6%ac%e0%a6%bf/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> শিশু তালহাকে হত্যার ছবি</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%aa%e0%a6%a5%e0%a7%87-%e0%a6%aa%e0%a6%a5%e0%a7%87-%e0%a6%aa%e0%a6%a4%e0%a6%be%e0%a6%95%e0%a6%be%e0%a6%b0-%e0%a6%ab%e0%a7%87%e0%a6%b0%e0%a6%bf%e0%a6%93%e0%a7%9f%e0%a6%be%e0%a6%b2%e0%a6%be/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> পথে পথে পতাকা’র ফেরিওয়ালারা</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%8f%e0%a6%95-%e0%a6%98%e0%a6%a3%e0%a7%8d%e0%a6%9f%e0%a6%be-%e0%a6%9a%e0%a7%87%e0%a6%b7%e0%a7%8d%e0%a6%9f%e0%a6%be%e0%a7%9f-%e0%a6%9f%e0%a7%81%e0%a6%95%e0%a7%87%e0%a6%b0%e0%a6%ac%e0%a6%be/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> এক ঘণ্টা চেষ্টায় টুকেরবাজারের আগুন নিয়ন্ত্রণে</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%ac%e0%a6%a8%e0%a7%8d%e0%a6%af-%e0%a6%aa%e0%a6%be%e0%a6%96%e0%a6%bf%e0%a6%b0-%e0%a6%ae%e0%a6%be%e0%a6%82%e0%a6%b8-%e0%a6%a6%e0%a6%bf%e0%a7%9f%e0%a7%87-%e0%a6%ad%e0%a7%8b%e0%a6%9c-%e0%a6%b8/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> বন্য পাখির মাংস দিয়ে ভোজ সারলেন&nbsp; সিলেটের পাঁচ কাউন্সিলর</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%ae%e0%a6%be%e0%a6%a5%e0%a6%be%e0%a7%9f-%e0%a6%aa%e0%a6%be%e0%a6%a5%e0%a6%b0-%e0%a6%ae%e0%a7%87%e0%a6%b0%e0%a7%87-%e0%a6%b6%e0%a6%bf%e0%a6%b6%e0%a7%81%e0%a6%95%e0%a7%87-%e0%a6%96%e0%a7%81/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> মাথায় পাথর মেরে শিশুকে খুন</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/29647-2/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> ছড়াশিল্পী আব্দুল বাসিত মোহাম্মদ আর নেই</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f%e0%a7%87-%e0%a6%b6%e0%a7%8d%e0%a6%b0%e0%a7%87%e0%a6%b7%e0%a7%8d%e0%a6%a0-%e0%a6%9c%e0%a7%9f%e0%a6%bf%e0%a6%a4%e0%a6%be%e0%a6%b0-%e0%a6%b8/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> সিলেটে শ্রেষ্ঠ জয়িতা’র সম্মাননা পেলেন পাঁচ নারী</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%a8%e0%a6%ac%e0%a6%9c%e0%a6%be%e0%a6%a4%e0%a6%95%e0%a7%87%e0%a6%b0-%e0%a6%ae%e0%a6%be%e0%a6%a5%e0%a6%be-%e0%a6%95%e0%a7%87%e0%a6%9f%e0%a7%87-%e0%a6%ab%e0%a7%87%e0%a6%b2%e0%a6%b2%e0%a7%87/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> নবজাতকের মাথা কেটে ফেললেন ডাক্তার</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%97%e0%a6%be%e0%a6%81%e0%a6%9c%e0%a6%be-%e0%a6%96%e0%a7%87%e0%a7%9f%e0%a7%87-%e0%a6%95%e0%a6%bf%e0%a6%ad%e0%a6%be%e0%a6%ac%e0%a7%87-%e0%a6%a7%e0%a6%b0%e0%a7%8d%e0%a6%b7%e0%a6%bf%e0%a6%a4/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> গাঁজা খেয়ে কিভাবে ধর্ষিত হলেন জানালেন সেই তরুণী</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b0%e0%a6%be%e0%a6%b7%e0%a7%8d%e0%a6%9f%e0%a7%8d%e0%a6%b0%e0%a6%aa%e0%a6%a4%e0%a6%bf-%e0%a6%93-%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%a7%e0%a6%be%e0%a6%a8%e0%a6%ae%e0%a6%a8%e0%a7%8d%e0%a6%a4%e0%a7%8d/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> রাষ্ট্রপতি ও প্রধানমন্ত্রীকে কটুক্তি: সিলেটে একজন গ্রেপ্তার</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f%e0%a7%87-%e0%a7%ad-%e0%a6%b0%e0%a7%8b%e0%a6%b9%e0%a6%bf%e0%a6%99%e0%a7%8d%e0%a6%97%e0%a6%be%e0%a6%b0-%e0%a6%9c%e0%a6%ac%e0%a6%be%e0%a6%a8%e0%a6%ac/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> সিলেটে ৭ রোহিঙ্গার জবানবন্দি, ২ মানবপাচারকারী কারাগারে</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%86%e0%a6%93%e0%a7%9f%e0%a6%be%e0%a6%ae%e0%a7%80-%e0%a6%b2%e0%a7%80%e0%a6%97%e0%a7%87%e0%a6%b0-%e0%a6%b6%e0%a6%bf%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be-%e0%a6%89%e0%a6%aa-%e0%a6%95%e0%a6%ae/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> আওয়ামী লীগের শিক্ষা উপ-কমিটিতে সিলেটের যারা</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%86%e0%a6%93%e0%a7%9f%e0%a6%be%e0%a6%ae%e0%a7%80-%e0%a6%b2%e0%a7%80%e0%a6%97%e0%a7%87%e0%a6%b0-%e0%a6%89%e0%a6%aa-%e0%a6%95%e0%a6%ae%e0%a6%bf%e0%a6%9f%e0%a6%bf%e0%a6%a4%e0%a7%87-%e0%a6%9c/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> আওয়ামী লীগের উপ-কমিটিতে জাকির</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%aa%e0%a6%be%e0%a6%a8%e0%a6%b8%e0%a6%bf-%e0%a6%b0%e0%a7%87%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a7%81%e0%a6%b0%e0%a7%87%e0%a6%a8%e0%a7%8d%e0%a6%9f%e0%a6%95%e0%a7%87-%e0%a6%b8%e0%a6%be%e0%a7%9c%e0%a7%87/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> পানসি রেস্টুরেন্টকে সাড়ে ৩ লাখ টাকা জরিমানা</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f%e0%a7%87%e0%a6%b0-%e0%a6%aa%e0%a6%be%e0%a6%81%e0%a6%9a-%e0%a6%ad%e0%a6%be%e0%a6%87-%e0%a6%b0%e0%a7%87%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a7%81%e0%a6%b0/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> সিলেটের পাঁচ ভাই রেস্টুরেন্টকে ৩লাখ টাকা জরিমানা</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b9%e0%a6%a0%e0%a6%be%e0%a7%8e-%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%9a%e0%a6%a3%e0%a7%8d%e0%a6%a1-%e0%a6%b6%e0%a6%ac%e0%a7%8d%e0%a6%a6%e0%a7%87-%e0%a6%95%e0%a7%87%e0%a6%81%e0%a6%aa%e0%a7%87/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> হঠাৎ প্রচণ্ড শব্দে কেঁপে উঠলো সিলেট ঝেরঝেরি পাড়া!</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%aa%e0%a6%be%e0%a6%9a%e0%a6%be%e0%a6%b0-%e0%a6%95%e0%a6%b0%e0%a6%be%e0%a6%b0-%e0%a6%89%e0%a6%a6%e0%a7%8d%e0%a6%a6%e0%a7%87%e0%a6%b6%e0%a7%8d%e0%a6%af%e0%a7%87%e0%a6%87-%e0%a6%b8%e0%a6%bf/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> পাচার করার উদ্দেশ্যেই সিলেটে জড়ো করা হয় ১৪ রোহিঙ্গাকে</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f%e0%a7%87-%e0%a6%9a%e0%a6%b0%e0%a6%ae%e0%a7%8b%e0%a6%a8%e0%a6%be%e0%a6%87-%e0%a6%aa%e0%a7%80%e0%a6%b0%e0%a7%87%e0%a6%b0-%e0%a6%ae%e0%a6%be%e0%a6%b9/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> সিলেটে চরমোনাই পীরের মাহফিলের ব্যানারে আগুন দিল ছাত্রলীগ</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f%e0%a7%87%e0%a6%b0-%e0%a6%b9%e0%a7%81%e0%a6%ae%e0%a6%be%e0%a7%9f%e0%a7%81%e0%a6%a8-%e0%a6%9a%e0%a6%a4%e0%a7%8d%e0%a6%ac%e0%a6%b0-%e0%a6%a5%e0%a7%87/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> সিলেটের হুমায়ুন চত্বর থেকে ১৪ রোহিঙ্গা ও ২ মানবপাচারকারী আটক</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%ac%e0%a6%99%e0%a7%8d%e0%a6%97%e0%a6%ac%e0%a6%a8%e0%a7%8d%e0%a6%a7%e0%a7%81-%e0%a6%ad%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a6%b0%e0%a7%8d%e0%a6%af-%e0%a6%ad%e0%a6%be%e0%a6%82%e0%a6%9a%e0%a7%81/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> বঙ্গবন্ধু ভাস্কর্য ভাংচুরের প্রতিবাদে সিলেটে বিশাল বিক্ষোভ মিছিল</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%95%e0%a6%be%e0%a6%a8%e0%a6%be%e0%a6%87%e0%a6%98%e0%a6%be%e0%a6%9f%e0%a7%87-%e0%a6%b8%e0%a7%8d%e0%a6%a4%e0%a7%8d%e0%a6%b0%e0%a7%80%e0%a6%95%e0%a7%87-%e0%a6%b6%e0%a7%8d%e0%a6%ac%e0%a6%be%e0%a6%b8/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> কানাইঘাটে স্ত্রীকে শ্বাসরুদ্ধ করে হত্যা : স্বামী গ্রেফতার</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f%e0%a7%87-%e0%a6%95%e0%a6%b0%e0%a7%8b%e0%a6%a8%e0%a6%be%e0%a7%9f-%e0%a6%ae%e0%a7%83%e0%a6%a4%e0%a7%8d%e0%a6%af%e0%a7%81-%e0%a6%ac%e0%a7%87%e0%a7%9c/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> সিলেটে করোনায় মৃত্যু বেড়ে ২৪৫</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%ac%e0%a6%bf%e0%a6%a8%e0%a6%be%e0%a6%ae%e0%a7%82%e0%a6%b2%e0%a7%87-%e0%a6%ae%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%95-%e0%a6%ac%e0%a6%bf%e0%a6%a4%e0%a6%b0%e0%a6%a8/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> বিনামূলে মাস্ক বিতরন</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%9c%e0%a6%95%e0%a6%bf%e0%a6%97%e0%a6%9e%e0%a7%8d%e0%a6%9c%e0%a7%87-%e0%a6%9c%e0%a6%ae%e0%a6%9c%e0%a6%ae%e0%a6%be%e0%a6%9f-%e0%a6%b8%e0%a7%81%e0%a6%aa%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%b0/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> জকিগঞ্জে জমজমাট সুপারির হাট</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f%e0%a7%87-%e0%a6%85%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%a8%e0%a7%8d%e0%a6%9f%e0%a6%bf%e0%a6%9c%e0%a7%87%e0%a6%a8-%e0%a6%95%e0%a6%b0%e0%a7%87%e0%a6%be%e0%a6%a8/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> সিলেটে অ্যান্টিজেন করোনাভাইরাস শনাক্তে শুরুর দিনেই বিপত্তি</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f%e0%a6%b8%e0%a6%b9-%e0%a7%a7%e0%a7%a6-%e0%a6%9c%e0%a7%87%e0%a6%b2%e0%a6%be%e0%a7%9f-%e0%a6%86%e0%a6%9c-%e0%a6%85%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%a8/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> সিলেটসহ ১০ জেলায় আজ অ্যান্টিজেন পরীক্ষা শুরু</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%9c%e0%a6%95%e0%a6%bf%e0%a6%97%e0%a6%9e%e0%a7%8d%e0%a6%9c-%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a7%81%e0%a6%a1%e0%a7%87%e0%a6%a8%e0%a7%8d%e0%a6%9f-%e0%a6%95%e0%a6%ae%e0%a6%bf%e0%a6%89%e0%a6%a8%e0%a6%bf/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> জকিগঞ্জ স্টুডেন্ট কমিউনিটির চতুর্থ অভিষেক সম্পন্ন</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%8f%e0%a6%ae%e0%a6%b8%e0%a6%bf-%e0%a6%95%e0%a6%b2%e0%a7%87%e0%a6%9c%e0%a7%87-%e0%a6%b8%e0%a6%82%e0%a6%98%e0%a6%ac%e0%a6%a6%e0%a7%8d%e0%a6%a7-%e0%a6%a7%e0%a6%b0%e0%a7%8d%e0%a6%b7%e0%a6%a3/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> এমসি কলেজে সংঘবদ্ধ ধর্ষণ : ৮ জনের বিরুদ্ধে অভিযোগপত্র দাখিল</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a6%be%e0%a6%82%e0%a6%ac%e0%a6%be%e0%a6%a6%e0%a6%bf%e0%a6%95%e0%a6%a4%e0%a6%be%e0%a6%b0-%e0%a6%89%e0%a6%aa%e0%a6%b0%e0%a7%87-%e0%a6%a8%e0%a7%87%e0%a6%87-%e0%a6%95%e0%a7%8b%e0%a6%a8/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> শ্রীমঙ্গলের বহুরুপী প্রতারক শাহিন!</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f-%e0%a6%ac%e0%a6%bf%e0%a6%ad%e0%a6%be%e0%a6%97%e0%a7%87-%e0%a6%95%e0%a6%b0%e0%a7%8b%e0%a6%a8%e0%a6%be%e0%a7%9f-%e0%a6%86%e0%a6%95%e0%a7%8d%e0%a6%b0/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> সিলেট বিভাগে করোনায় আক্রান্ত বেড়ে ১৪৬৪৬</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%a1%e0%a6%bf%e0%a6%8f%e0%a6%a8%e0%a6%8f-%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%a4%e0%a6%bf%e0%a6%ac%e0%a7%87%e0%a6%a6%e0%a6%a8-%e0%a6%a7%e0%a6%b0%e0%a7%8d%e0%a6%b7%e0%a6%a3%e0%a7%87%e0%a6%b0/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> ডিএনএ প্রতিবেদন ধর্ষণের সংশিষ্টতা মিলছে আসামীদের</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f%e0%a7%87%e0%a6%b0-%e0%a6%a4%e0%a6%bf%e0%a6%a8-%e0%a6%aa%e0%a7%87%e0%a7%97%e0%a6%b0%e0%a6%b8%e0%a6%ad%e0%a6%be%e0%a7%9f-%e0%a6%a8%e0%a7%8c%e0%a6%95/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> সিলেটের তিন পৌরসভায় নৌকার প্রার্থী চূড়ান্ত</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%86%e0%a6%b2%e0%a7%80%e0%a6%97%e0%a7%87%e0%a6%b0-%e0%a6%95%e0%a7%87%e0%a6%a8%e0%a7%8d%e0%a6%a6%e0%a7%8d%e0%a6%b0%e0%a7%80%e0%a7%9f-%e0%a6%b8%e0%a6%be%e0%a6%82%e0%a6%97%e0%a6%a0%e0%a6%a8/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> আ’লীগের কেন্দ্রীয় সাংগঠনিক সম্পাদক নাদেলের বাসায় দুর্ধর্ষ চুরি</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f%e0%a7%87-%e0%a6%8f%e0%a6%95%e0%a6%a6%e0%a6%bf%e0%a6%a8%e0%a7%87-%e0%a7%a9%e0%a7%a6-%e0%a6%9c%e0%a6%a8%e0%a7%87%e0%a6%b0-%e0%a6%95%e0%a6%b0%e0%a7%8b/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> সিলেটে একদিনে ৩০ জনের করোনা শনাক্ত</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%97%e0%a7%8b%e0%a7%9f%e0%a6%be%e0%a6%87%e0%a6%a8%e0%a6%98%e0%a6%be%e0%a6%9f%e0%a7%87-%e0%a6%97%e0%a7%83%e0%a6%b9%e0%a6%ac%e0%a6%a7%e0%a7%82%e0%a6%b0-%e0%a6%b0%e0%a6%b9%e0%a6%b8%e0%a7%8d%e0%a6%af/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> গোয়াইনঘাটে গৃহবধূর রহস্যময় মৃত্যু</h2>
                      </div>
                    </div>
                  </a>
                  <a href="https://deshdorpon.com/%e0%a6%b8%e0%a6%bf%e0%a6%b2%e0%a7%87%e0%a6%9f%e0%a7%87-%e0%a7%a9%e0%a6%9f%e0%a6%bf-%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%a4%e0%a6%bf%e0%a6%b7%e0%a7%8d%e0%a6%a0%e0%a6%be%e0%a6%a8%e0%a6%95%e0%a7%87/">
                    <div className="news-box-w-sm d-flex">
                      <div className="mt-3 news-title float-right pl-3 pr-0 border-bottom">
                        <h2><i className="fas fa-arrow-right" /> সিলেটে ৩টি প্রতিষ্ঠানকে লাখ টাকা জরিমানা</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="line-bottom mt-4 mb-4">
            </div>
          </div>
        </div>


        <div className="col-md-12">
          <div className="line-bottom mt-4 mb-4">
          </div>
        </div>


        <div className="col-md-12">
          <div className="ad-box" style={{height: 'auto !important'}}>
ads
          </div>
        </div>
        <div className="col-md-12">
          <div className="line-bottom mt-4 mb-4">
          </div>
        </div>



        </div>
      </div>


    )

}


}

export default SectionOne;
