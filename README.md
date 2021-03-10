# Block-Auction
4학년 1학기 전공종합설계 프로젝트

*****

## git 이용법
### <완전 처음>
****
=> fork => git clone => git remote add

- 타겟 프로젝트의 저장소를 자신의 저장소로 Fork한다.

- fork로 생성한 본인 계정의 저장소에서 clone or download 버튼을 누르고 표시되는 url을 복사한다 ( 브라우저 url을 그냥 복사하면 안됨!!)

    ```
    git clone https://github.com/dojyj/Block-Auction(복사한 주소)
    ```

- 로컬 저장소에 자신의 원격 저장소 추가 && 프로젝트 원격 저장소 추가 
    
    ```
    git remote add origin(자기 repo 별명) https://github.com/dojyj/Block-Auction(복사한 주소)
    git remote add upstream(프로젝트 repo 별명) https://github.com/dojyj/Block-Auction.git
    ```

#### <그 이후 반복 >
****
=> branch 생성 => add,commit,push => pull request 생성 => merge PR => 동기화 및 branch 삭제 => branch 생성..

- ***코드 짜기 전에!! branch 생성 및 동기화
    ```
    git checkout -b dy(자기 branch 별명)
    git fetch upstream(원본 저장소)
    git merge upstream/main(원본 저장소 main 브랜치)
    // 바뀐 내용이 있다면
    git push
    ```
    
- dependency 다운로드 (package.json에 새로운 모듈 추가됬을 경우)
  
    ```
    npm install
    ```

- 수정 작업후 add,commit,push
 
    ```
    git push origin(자기 repo 별명) dy(자기 branch 별명)
    ```

- 자기 repo 들어가서 pull request 생성. push 완료하고 자기 계정의 github 저장소에 들어가면 Compare & pull request 버튼이 활성화 되어있음. 버튼 누르고 메세지 작성후 PR 생성!!
  
- merge PR. 원본 저장소 관리자가 확인하고 merge
  
- Merge이후 branch 삭제

    ```
    git checkout main (자기 remote repository 별명)
    git branch -d dy (자기 branch 별명)
    ```

- 코드 수정하기 전 branch 생성까지 필수!! 