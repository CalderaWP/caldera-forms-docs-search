import React from 'react';
import axios from 'axios';
import {debounce} from 'throttle-debounce';
import { Grid, Row, Col, Form, FormGroup, Checkbox, ControlLabel, Button } from 'react-bootstrap';
import  { Catdera }  from "./Components/Catdera";
import { AddonCategory } from './Components/AddonCategory';
import {Keyword} from "./Components/Keyword";
import {Results} from "./Components/Results";
import {Pagination} from "./Components/Pagination";

import ReactGA from 'react-ga';
import { cacheAdapterEnhancer } from 'axios-extensions';

const GAUA = 'UA-59323601-1';
ReactGA.initialize(GAUA);



let POSTS = [
    {
        title: {rendered: ''},
        excerpt: {rendered: ''}
    }
];


class DocSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: POSTS,
            page: 1,
            totalPages: 1,
            query: {
                s: '',
                categories: []
            },
            boxesChecked: {
                actions: false,
                addOns:false,
                filters: false,
                fieldTypes:false,
                pro: false,
                gettingStarted: true,
                processors: false,
                shortcode: false,
                developerAPI:false,
                entries:false
            },
            categories : {
                actions: 180,
                addOns: 171,
                filters: 170,
                fieldTypes:178,
                pro: 459,
                gettingStarted: 270,
                processors: 254,
                shortcode: 409,
                entries:269,
                developerAPI:184,
                braintree: 215,
                styleCustomizer:496,
                calderaForms: 141,
                entryLimiter: 522,
                translations:491,
                users:159,
                zapier:450,
                clarity:138,
                connectedForms: 212,
                edd:233,
                easyPods:139,
                easyQueries: 204,
                geolocation:156,
                mailChimp: 181,
                stripe:158,
                paypalExpress:183,
                authNet:217,
                runAction:161,
                youTube:451,
                convertKit:254,
                googleAnalytics:393,
                members:259,
                thirdParty:391,
            },
            loading: false,
            addOnsChecked: {
                braintree: false,
                styleCustomizer:false,
                easyQueries:false,
                translations:false,
                users:false,
                zapier:false,
                entryLimiter: false,
                clarity:false,
                connectedForms: false,
                edd:false,
                easyPods:false,
                geolocation:false,
                mailChimp: false,
                paypalExpress:false,
                stripe:false,
                authNet:false,
                runAction:false,
                youTube:false,
                convertKit:false,
                googleAnalytics:false,
                members:false,

            }
        };
        this.handleChangeKeyword = this.handleChangeKeyword.bind(this);
        this.toggleAction = this.toggleAction.bind(this);
        this.toggleAddons = this.toggleAddons.bind(this);
        this.toggleFilters = this.toggleFilters.bind(this);
        this.toggleFieldTypes = this.toggleFieldTypes.bind(this);
        this.togglePro = this.togglePro.bind(this);
        this.toggleShortcode = this.toggleShortcode.bind(this);
        this.toggleEntries = this.toggleEntries.bind(this);
        this.toggleDeveloperAPI = this.toggleDeveloperAPI.bind(this);
        this.toggleGettingStarted = this.toggleGettingStarted.bind(this);
        this.toggleProcessors = this.toggleProcessors.bind(this);
        this.search = this.search.bind(this);
        this.search = debounce(700, this.search);

        this.toggleAddon = this.toggleAddon.bind(this);
        this.toggleOffOtherAddons = this.toggleOffOtherAddons.bind(this);
        this.toggleAllAddonsOff = this.toggleAllAddonsOff.bind(this);

        this.handleNextPage = this.handleNextPage.bind(this);
        this.handlePrevPage = this.handlePrevPage.bind(this);
        this.setPageOne = this.setPageOne.bind(this);
    }

    handleNextPage(){
        let nextPage = this.state.page + 1;
        if( nextPage <= this.state.totalPages ){
            this.setState({page:nextPage});
            this.search();
        }
    }

    handlePrevPage(){
        let prevPage = this.state.page - 1;
        if( prevPage > 0 ){
            this.setState({page:prevPage});
            this.search();
        }
    }

    setPageOne(){
        this.setState({page:1});
    }


    handleChangeKeyword(event){
        this.setPageOne();
        let q = this.state.query;
        q.s = event.target.value;
        this.setState( {query:q});
        this.search();
    }

    toggleAddon(addOnIdBeingChecked){
        this.setPageOne();
        let boxesChecked = this.state.boxesChecked;
        boxesChecked.gettingStarted = false;
        this.setState( {boxesChecked:boxesChecked});
        this.toggleOffOtherAddons(addOnIdBeingChecked);
        this.search();
    }

    toggleAllAddonsOff(){
        this.setPageOne();
        let boxesChecked = this.state.addOnsChecked;
        Object.keys( boxesChecked ).forEach( (addOn ) => {
            boxesChecked[addOn] = false;
        });

        this.setState({addOnsChecked:boxesChecked})
    }

    toggleOffOtherAddons(exceptCategoryId){
        this.setPageOne();
        let exceptCategory= null;

        for (let addOnName in this.state.categories) {
            let addOnId = this.state.categories[addOnName];
            if( addOnId === exceptCategoryId ){
                exceptCategory = addOnName;
            }
        }

        let boxesChecked = this.state.addOnsChecked;
        Object.keys( boxesChecked ).forEach( (addOn ) => {
            boxesChecked[addOn] = false;
        });

        boxesChecked[exceptCategory] = true;
        this.setState({addOnsChecked:boxesChecked})
    }

    toggleAction(){
        this.setPageOne();
        let boxesChecked = this.state.boxesChecked;
        boxesChecked.actions = ! boxesChecked.actions;
        this.setState( {boxesChecked:boxesChecked});
        this.search();
    }

    toggleFilters(){
        this.setPageOne();
        let boxesChecked = this.state.boxesChecked;
        boxesChecked.filters = ! boxesChecked.filters;
        this.setState( {boxesChecked:boxesChecked});
        this.search();

    }

    toggleAddons(){
        this.setPageOne();
        let boxesChecked = this.state.boxesChecked;
        boxesChecked.addOns = ! boxesChecked.addOns;
        this.setState( {boxesChecked:boxesChecked});
        this.search();
    }

    togglePro(){
        this.setPageOne();
        let boxesChecked = this.state.boxesChecked;
        boxesChecked.pro = ! boxesChecked.pro;
        this.setState( {boxesChecked:boxesChecked});
        this.search();
    }

    toggleGettingStarted(){
        this.setPageOne();
        let boxesChecked = this.state.boxesChecked;
        boxesChecked.gettingStarted = ! boxesChecked.gettingStarted;
        this.setState( {boxesChecked:boxesChecked});
        this.search();
    }

    toggleShortcode(event){
        this.setPageOne();
        let boxesChecked = this.state.boxesChecked;
        boxesChecked.shortcode = ! boxesChecked.shortcode;
        this.setState( {boxesChecked:boxesChecked});
        this.search();
    }

    toggleEntries(event){
        this.setPageOne();
        let boxesChecked = this.state.boxesChecked;
        boxesChecked.entries = ! boxesChecked.entries;
        this.setState( {boxesChecked:boxesChecked});
        this.search();
    }

    toggleDeveloperAPI(event){
        this.setPageOne();
        let boxesChecked = this.state.boxesChecked;
        boxesChecked.developerAPI = ! boxesChecked.developerAPI;
        this.setState( {boxesChecked:boxesChecked});
        this.search();
    }


    toggleFieldTypes(event){
        this.setPageOne();
        let boxesChecked = this.state.boxesChecked;
        boxesChecked.fieldTypes = ! boxesChecked.fieldTypes;
        this.setState( {boxesChecked:boxesChecked});
        this.search();
    }


    toggleProcessors(event){
        this.setPageOne();
        let boxesChecked = this.state.boxesChecked;
        boxesChecked.processors = ! boxesChecked.processors;
        this.setState( {boxesChecked:boxesChecked});
        this.search();
    }

    search() {
        this.setState({loading: true});

        let params = {
            page: this.state.page
        };

        if(this.state.query.s ){
            params['s'] = this.state.query.s;
            ReactGA.event({
                category: 'Documentation Search Keyword',
                action: 'Deleted Component',
                label: params['s']
            });
        }

        params['categories'] = [];
        Object.keys(this.state.boxesChecked).forEach((cat) => {
            if (this.state.boxesChecked[cat]) {
                params.categories.push(this.state.categories[cat]);
            }
        });

        Object.keys(this.state.addOnsChecked).forEach((cat) => {
            if (this.state.addOnsChecked[cat]) {
                params.categories.push(this.state.categories[cat]);
            }
        });


        if( params['categories'].length){
            params['categories'].forEach( (categoryId) => {

                if(categoryId){
                    this.getCategory(categoryId).then(category =>{
                        let event = {
                            category: 'Documentation Search',
                            action: 'Category Searched',
                            label: category.name,
                            value: categoryId
                        };
                        console.log(event);
                        ReactGA.event(event);
                    })
                }

            })
        }

        axios({
            method: 'get',
            url: 'https://calderaforms.com/wp-json/wp/v2/doc',
            params: params,
            adapter: cacheAdapterEnhancer(axios.defaults.adapter, true)
        })
            .then( (response) => {
                this.setState( { totalPages: response.headers[ 'x-wp-totalpages' ]});
                this.setState({loading: false});
                this.setState({posts: response.data});
        });
    }


    getCategory(categoryId){
        return axios({
            method: 'get',
            url: `https://calderaforms.com/wp-json/wp/v2/categories/${categoryId}`,
            adapter: cacheAdapterEnhancer(axios.defaults.adapter, true)
        })
            .then( (response) => {
                return response.data;
            });
    }

    componentDidMount(){
        this.search();
    }

    render(){
        return(
            <Grid>
                <Row >
                <Col sm={2} md={3} >
                    <Form role="search">
                        <FormGroup controlId="category-search">
                            <ControlLabel>Search By Category</ControlLabel>

                            <Checkbox
                                onChange={this.toggleGettingStarted}
                                value={this.state.boxesChecked['gettingStarted']}>
                                <ControlLabel>
                                    Getting Started
                                </ControlLabel>
                            </Checkbox>

                            <Checkbox
                                onChange={this.togglePro}
                                value={this.state.boxesChecked['pro']}>
                                <ControlLabel>
                                    Caldera Forms Pro
                                </ControlLabel>
                            </Checkbox>

                            <Checkbox
                                onChange={this.toggleFieldTypes}
                                value={this.state.boxesChecked['fieldTypes']}>
                                <ControlLabel>
                                    Field Types
                                </ControlLabel>
                            </Checkbox>


                            <Checkbox
                                onChange={this.toggleShortcode}
                                value={this.state.boxesChecked['shortcode']}>
                                <ControlLabel>
                                    Shortcodes
                                </ControlLabel>
                            </Checkbox>

                            <Checkbox
                                onChange={this.toggleEntries}
                                value={this.state.boxesChecked['entries']}>
                                <ControlLabel>
                                    Entries
                                </ControlLabel>
                            </Checkbox>

                           <FormGroup>
                               <Checkbox
                                   onChange={this.toggleDeveloperAPI}
                                   value={this.state.boxesChecked['developerAPI']}>
                                   <ControlLabel>
                                       Developer API
                                   </ControlLabel>
                               </Checkbox>


                               <Checkbox
                                   onChange={this.toggleAction}
                                   value={this.state.boxesChecked['actions']}>
                                   <ControlLabel>
                                       Actions
                                   </ControlLabel>
                               </Checkbox>

                               <Checkbox
                                   onChange={this.toggleFilters}
                                   value={this.state.boxesChecked['filters']}>
                                   <ControlLabel>
                                       Filters
                                   </ControlLabel>
                               </Checkbox>
                           </FormGroup>
                        </FormGroup>

                        <Keyword
                            change={this.handleChangeKeyword}
                            value={this.state.query.s}
                        />

                        <FormGroup controlId="add-on-search">
                            <ControlLabel>Add-on Documentation</ControlLabel>

                            <Button
                                bsStyle="info"
                                onClick={this.toggleAllAddonsOff}
                            >
                                Reset Add-on Search
                            </Button>

                            <FormGroup>
                                <AddonCategory
                                    category={this.state.categories.mailChimp}
                                    checked={this.state.addOnsChecked.mailChimp}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.mailChimp
                                    )}
                                />

                                <AddonCategory
                                    category={this.state.categories.paypalExpress}
                                    checked={this.state.addOnsChecked.paypalExpress}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.paypalExpress
                                    )}
                                />

                                <AddonCategory
                                    category={this.state.categories.stripe}
                                    checked={this.state.addOnsChecked.stripe}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.stripe
                                    )}
                                />


                                <AddonCategory
                                    category={this.state.categories.authNet}
                                    checked={this.state.addOnsChecked.authNet}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.authNet
                                    )}
                                />

                                <AddonCategory
                                    category={this.state.categories.braintree}
                                    checked={this.state.addOnsChecked.braintree}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.braintree
                                    )}
                                />

                                <AddonCategory
                                    category={this.state.categories.entryLimiter}
                                    checked={this.state.addOnsChecked.entryLimiter}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.entryLimiter
                                    )}
                                />

                                <AddonCategory
                                    category={this.state.categories.translations}
                                    checked={this.state.addOnsChecked.translations}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.translations
                                    )}
                                />

                                <AddonCategory
                                    category={this.state.categories.users}
                                    checked={this.state.addOnsChecked.users}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.users
                                    )}
                                />

                                <AddonCategory
                                    category={this.state.categories.zapier}
                                    checked={this.state.addOnsChecked.zapier}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.zapier
                                    )}
                                />

                                <AddonCategory
                                    category={this.state.categories.styleCustomizer}
                                    checked={this.state.addOnsChecked.styleCustomizer}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.styleCustomizer
                                    )}
                                />

                                <AddonCategory
                                    category={this.state.categories.connectedForms}
                                    checked={this.state.addOnsChecked.connectedForms}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.connectedForms
                                    )}
                                />

                                <AddonCategory
                                    category={this.state.categories.googleAnalytics}
                                    checked={this.state.addOnsChecked.googleAnalytics}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.googleAnalytics
                                    )}
                                />

                                <AddonCategory
                                    category={this.state.categories.edd}
                                    checked={this.state.addOnsChecked.edd}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.edd
                                    )}
                                />

                                <AddonCategory
                                    category={this.state.categories.geolocation}
                                    checked={this.state.addOnsChecked.geolocation}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.geolocation
                                    )}
                                />

                                <AddonCategory
                                    category={this.state.categories.runAction}
                                    checked={this.state.addOnsChecked.runAction}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.runAction
                                    )}
                                />

                                <AddonCategory
                                    category={this.state.categories.convertKit}
                                    checked={this.state.addOnsChecked.convertKit}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.convertKit
                                    )}
                                />



                            </FormGroup>


                            <FormGroup>
                                <AddonCategory
                                    category={this.state.categories.easyQueries}
                                    checked={this.state.addOnsChecked.easyQueries}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.easyQueries
                                    )}
                                />

                                <AddonCategory
                                    category={this.state.categories.easyPods}
                                    checked={this.state.addOnsChecked.easyPods}
                                    onChange={this.toggleAddon.bind(
                                        null,
                                        this.state.categories.easyPods)
                                    }
                                />

                            </FormGroup>
                        </FormGroup>



                    </Form>
                </Col>
                <Col sm={9} md={9}>
                    {this.state.loading &&
                        <Catdera/>
                    }
                    {! this.state.loading &&
                        <div>
                            <Pagination
                                page={this.state.page}
                                pages={this.state.totalPages}
                                prevHandler={this.handlePrevPage}
                                nextHandler={this.handleNextPage}
                            />
                            <Results
                                posts={this.state.posts}
                            />

                            <Pagination
                                page={this.state.page}
                                pages={this.state.totalPages}
                                prevHandler={this.handlePrevPage}
                                nextHandler={this.handleNextPage}
                            />
                        </div>
                    }

                </Col>

            </Row></Grid>
        )
    }
}

export default  DocSearch;