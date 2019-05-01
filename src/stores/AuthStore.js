import { observable, computed, toJS } from 'mobx'
import moment from 'moment';

export class AuthStore {


  @observable isLoggedIn = false
  @observable hasSkippedLogin = false
  @observable hasPassedWalkthrough = false
  @observable hasPressedSingupButton = false
  @observable id = null
  @observable name = null
  @observable userToken = null


  constructor() {
  }
}