const journals = [
  {
    user_id: "1",
    title: "Ordinary Joe",
    journal_entry: "Joe joe, joe joe... joe! ...joe?",
  },
  {
    user_id: "2",
    title: "Loretta Loretta",
    journal_entry:
      "Lorem ipsum dolor sit amet. Qui fugit dolore est dolores distinctio in Quis harum. Cum sunt voluptas rem voluptate architecto quo culpa voluptas eum doloribus quia nam voluptate natus ea modi exercitationem est quia maxime. Qui tempora quam sit soluta cumque rem vero nihil rem omnis repudiandae et necessitatibus voluptas aut provident sint et suscipit. Est libero soluta aut facilis libero eum voluptatem excepturi et enim voluptates cum consectetur enim a facilis velit. Sit eaque quam ut nulla dolores sed possimus eveniet aut veniam provident ex praesentium dolor et consequuntur quis! Qui cupiditate magni qui modi voluptatum et debitis consectetur ut veritatis assumenda et impedit magnam sed galisum consequatur. At consectetur repudiandae et quibusdam maiores eos adipisci quae? Et omnis nobis non quia reiciendis sit tempora totam. In quod dolorem et dolorem alias qui voluptatum cupiditate. Et fugiat dignissimos nam vero explicabo At galisum deserunt sit eligendi iste qui velit soluta est dolor asperiores est expedita obcaecati. Ea impedit doloribus qui nisi internos aut consectetur esse aut quasi architecto 33 error quasi et praesentium autem. Ut ipsam sequi aut omnis illum et suscipit dolorem aut veniam doloremque quo veniam eius rem atque ratione. Aut consequatur temporibus et veritatis nemo non minus sint qui totam voluptate qui fugiat necessitatibus id veniam rerum quo voluptatem voluptates. Qui molestiae perspiciatis qui quas ut galisum sint quo cupiditate voluptate. At amet rerum non exercitationem dolore ut ducimus unde in cumque repellat in quod rerum nam delectus optio vel adipisci quam. Est quae culpa eos molestiae aspernatur et minima enim aut dolor tempora At quia voluptate eos consequatur iste. Ad ratione exercitationem vel adipisci dolor ab doloribus saepe quaerat Quis non voluptas expedita est nostrum placeat et sunt earum.",
  },
  {
    user_id: "3",
    title: "Ja ba da",
    journal_entry:
      "Jabda dah dooda dooba da dooda doo dooba jabda ba dooda ba dooda dah jabda jabda. Dah jabda ba daba dooda daba jabda da jabda dooba dah jabda ba dooda daba. Da daba dooba ba dooda dooda da dooda dah dooda ba jabda jabda. Dah dooba dooba doo daba dooda dooba dooba doo daba doo da jabda doo dooda dooda. Da dooda dah jabda dooda ba doo jabda.",
  },
  {
    user_id: "3",
    title: "Great Wonders",
    journal_entry:
      "Magnificent splendid clean. Wonderful amazing priceless clean clean excellent magnificent amazing awsome clean best splendid clean eloquent. Excellent magnificent awsome eloquent magnificent splendid priceless clean amazing clean excellent splendid. Amazing clean magnificent awsome best. Excellent awsome priceless wonderful splendid wonderful clean priceless awsome wonderful priceless wonderful awsome. Priceless priceless clean excellent eloquent eloquent priceless best priceless. Amazing best amazing awsome magnificent awsome magnificent clean excellent priceless eloquent. Eloquent amazing excellent wonderful excellent best wonderful best magnificent excellent best priceless. Splendid priceless clean wonderful splendid best awsome amazing best eloquent. Best splendid awsome clean priceless amazing clean amazing magnificent eloquent.",
  },
  {
    user_id: "3",
    title: "Ip Zuma",
    journal_entry:
      "Lorem ipsum dolor sit amet. Aut praesentium culpa aut modi nostrum aut dolorem veritatis? Qui vero culpa eum quaerat sunt aut dolore nisi cum dolorum exercitationem qui ipsam enim. Nam praesentium tempore et vitae voluptatibus quo voluptatum quae sed impedit provident sed officia inventore aut enim eligendi. Aut accusamus enim qui nostrum sunt est facere omnis nam nostrum quia 33 illum modi. Et illo quibusdam nam suscipit voluptatem sit natus consequuntur aut blanditiis nisi qui galisum ducimus sed voluptatum quia sit aspernatur ipsa. Ut voluptatem ipsa ut ratione veniam vel laboriosam harum cum fugiat corporis et suscipit obcaecati. Qui tempore repellat hic maxime reiciendis aut debitis tempore qui libero asperiores aut nostrum adipisci et cupiditate debitis? Sed veniam vero in iusto ratione et quis illo qui sunt minus aut nihil galisum! Quo ducimus aperiam 33 omnis delectus qui consequatur quis. Sit obcaecati placeat vel dolore molestiae qui nostrum ipsum et dolore Quis qui deserunt voluptate aut reprehenderit quos nam porro architecto. Est atque nulla et fuga expedita ut dolorem nihil ab libero quasi et omnis iure. Qui perferendis fugiat aut corrupti quis est animi nostrum? Rem suscipit quia ut labore nemo qui voluptate culpa eum vitae reiciendis cum repellendus recusandae. Et voluptates quas eum voluptate voluptas sit pariatur incidunt est autem vel labore excepturi. Ut eaque dolorem eum saepe excepturi et commodi facilis. Aut blanditiis cumque ut accusamus obcaecati ab praesentium consequatur At consequuntur distinctio et quasi dolorem? Sit praesentium atque qui assumenda ratione et molestias consequatur non accusamus dolorem qui iste dolorem aut laborum animi quo nemo sint. Qui eveniet quod sit distinctio quod est officiis asperiores. Hic totam expedita sed amet mollitia vel veniam iusto aut velit velit quo cumque fugiat cum voluptatem dolore. Qui asperiores distinctio est cumque eveniet ad nulla internos cum doloribus consequuntur rem pariatur tempore ut Quis animi sed modi natus. Qui illum earum sed maxime facilis et fuga autem aut eligendi. Vel corrupti velit aut cumque amet quo rerum assumenda non esse unde et cupiditate dicta et fuga odit. Qui pariatur nemo rem recusandae architecto qui internos voluptatem ab fuga sequi? Qui eius dolor ex dignissimos voluptatem eos voluptatem enim et necessitatibus omnis aut quia dolores est animi debitis.",
  },
];

exports.seed = function (knex) {
  return knex("journals").insert(journals);
};
